const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    validate: [isEmail],
    lowercase: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    max: 1024,
  },
  name: { type: String, default: "", trim: true },
  firstName: { type: String, default: "", trim: true },
  Country: { type: String, default: "" },
  City: { type: String, default: "" },
  picture: {
    type: String,
    default: "",
  },

  ChooseYouorPracticedSports: { type: [String] },
  bio: {
    type: String,
    max: 2024,
  },
  followers: {
    type: [String],
  },
  following: {
    type: [String],
  },
  likes: {
    type: [String],
  },
});

// Cette fonction sera executer avant l'enrégistrement dans la DataBase
// Cette fonction va nous cripté le password
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
