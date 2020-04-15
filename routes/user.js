import express from "express";
import bcrypt from "bcrypt";
import underscore from "underscore";
import { verficationAuth, verficationAdmin } from "./../middlewares/auth";
import User from "../models/user";

const router = express.Router();

const ENTRYPOINT = "/user";
const saltRounds = 10;

router.post(`${ENTRYPOINT}`, async (req, res) => {
  const body = req.body;

  try {
    body.password = bcrypt.hashSync(body.password, saltRounds);

    const userDB = await User.create(body);

    res.json(userDB);
  } catch (error) {
    return res.status(400).json({
      message: "Internal error",
      error,
    });
  }
});

router.put(
  `${ENTRYPOINT}/:id`,
  [verficationAuth, verficationAdmin],
  async (req, res) => {
    const id = req.params.id;
    const body = underscore.pick(req.body, [
      "name",
      "email",
      "password",
      "active",
    ]);

    try {
      if (body.password) {
        body.password = bcrypt.hashSync(body.password, saltRounds);
      }

      const userDB = await User.findByIdAndUpdate({ _id: id }, body, {
        new: true,
        runValidators: true,
      });

      res.json(userDB);
    } catch (error) {
      return res.status(400).json({
        message: "Internal error",
        error,
      });
    }
  }
);

module.exports = router;
