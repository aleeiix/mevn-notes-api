import express from "express";
import bcrypt from "bcrypt";

import User from "../models/user";

const router = express.Router();

const ENTRYPOINT = "/login";
const saltRounds = 10;

router.post(`${ENTRYPOINT}`, async (req, res) => {
  const body = req.body;

  try {
    const userDB = await User.findOne({ email: body.email });
    if (!userDB) {
      return res.status(400).json({
        message: "Email not found",
      });
    }

    if (!bcrypt.compareSync(body.password, userDB.password)) {
      return res.status(400).json({
        message: "Incorrect password",
      });
    }

    res.json({ user: userDB, token: "token" });
  } catch (error) {
    return res.status(400).json({
      message: "Internal error",
      error,
    });
  }
});

module.exports = router;
