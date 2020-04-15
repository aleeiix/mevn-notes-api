import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const Schema = mongoose.Schema;

const roles = {
  values: ["ADMIN", "USER"],
  message: "{VALUE} invalid role",
};

const userSchema = new Schema({
  name: { type: String, required: [true, "The name field is required"] },
  email: {
    type: String,
    required: [true, "The email field is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "The password field is required"],
  },
  date: { type: Date, default: Date.now },
  role: { type: String, default: "USER", enum: roles },
  active: { type: Boolean, default: true },
});

userSchema.plugin(uniqueValidator, {
  message: "Error, expected {PATH} to be unique",
});

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

const User = mongoose.model("User", userSchema);

export default User;
