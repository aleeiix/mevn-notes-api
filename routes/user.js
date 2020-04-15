import express from "express";
import bcrypt from "bcrypt";
import User from "../models/user";

const router = express.Router();

const ENTRYPOINT = "/user";
const saltRounds = 10;

// router.get(`${ENTRYPOINT}`, async (req, res) => {
//   try {
//     const notesDB = await Note.find();

//     res.json(notesDB);
//   } catch (error) {
//     return res.status(400).json({
//       message: "Internal error",
//       error,
//     });
//   }
// });

// router.get(`${ENTRYPOINT}/:id`, async (req, res) => {
//   const id = req.params.id;

//   try {
//     const noteDB = await Note.findOne({ _id: id });

//     res.json(noteDB);
//   } catch (error) {
//     return res.status(400).json({
//       message: "Internal error",
//       error,
//     });
//   }
// });

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

// router.delete(`${ENTRYPOINT}/:id`, async (req, res) => {
//   const id = req.params.id;

//   try {
//     const noteDB = await Note.findByIdAndDelete({ _id: id });

//     if (!noteDB) {
//       return res.status(400).json({
//         message: "That note does not exist",
//         error,
//       });
//     }

//     res.json(noteDB);
//   } catch (error) {
//     return res.status(400).json({
//       message: "Internal error",
//       error,
//     });
//   }
// });

router.put(`${ENTRYPOINT}/:id`, async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  try {
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
});

module.exports = router;
