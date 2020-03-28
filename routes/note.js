import express from "express";
import Note from "./../models/note";

const router = express.Router();

router.post("/note", async (req, res) => {
  const body = req.body;

  try {
    const noteDB = await Note.create(body);

    res.status(200).json(noteDB);
  } catch (error) {
    return res.status(500).json({
      message: "Internal error",
      error
    });
  }
});

module.exports = router;
