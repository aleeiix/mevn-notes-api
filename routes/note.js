import express from "express";
import { verficationAuth, verficationAdmin } from "./../middlewares/auth";

import Note from "./../models/note";

const router = express.Router();
const ENTRYPOINT = "/note";

router.get(`${ENTRYPOINT}`, verficationAuth, async (req, res) => {
  const userId = req.user._id;

  const limit = Number(req.query.limit) || 5;
  const skip = Number(req.query.skip) || 0;

  try {
    const notesDB = await Note.find({ userId }).limit(limit).skip(skip);

    const total = await Note.find({ userId }).countDocuments();

    res.json({ data: notesDB, total });
  } catch (error) {
    return res.status(400).json({
      message: "Internal error",
      error,
    });
  }
});

router.get(`${ENTRYPOINT}/:id`, async (req, res) => {
  const id = req.params.id;

  try {
    const noteDB = await Note.findOne({ _id: id });

    res.json(noteDB);
  } catch (error) {
    return res.status(400).json({
      message: "Internal error",
      error,
    });
  }
});

router.post(`${ENTRYPOINT}`, verficationAuth, async (req, res) => {
  const body = req.body;

  body.userId = req.user._id;

  try {
    const noteDB = await Note.create(body);

    res.json(noteDB);
  } catch (error) {
    return res.status(400).json({
      message: "Internal error",
      error,
    });
  }
});

router.delete(`${ENTRYPOINT}/:id`, async (req, res) => {
  const id = req.params.id;

  try {
    const noteDB = await Note.findByIdAndDelete({ _id: id });

    if (!noteDB) {
      return res.status(400).json({
        message: "That note does not exist",
        error,
      });
    }

    res.json(noteDB);
  } catch (error) {
    return res.status(400).json({
      message: "Internal error",
      error,
    });
  }
});

router.put(`${ENTRYPOINT}/:id`, async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    const noteDB = await Note.findByIdAndUpdate({ _id: id }, body, {
      new: true,
    });

    res.json(noteDB);
  } catch (error) {
    return res.status(400).json({
      message: "Internal error",
      error,
    });
  }
});

module.exports = router;
