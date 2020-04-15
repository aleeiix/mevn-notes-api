import jwt from "jsonwebtoken";

const secret = "mevn_note_2020";

const verficationAuth = (req, res, next) => {
  const token = req.get("Authorization");

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      res.status(401).json({
        message: "User invalid",
        err,
      });
    }

    req.user = decoded.data;

    next();
  });
};

const verficationAdmin = (req, res, next) => {
  const role = req.user.role;

  if (role !== "ADMIN") {
    res.status(401).json({
      message: "Invalid role",
    });
  }

  next();
};

module.exports = { verficationAuth, verficationAdmin };
