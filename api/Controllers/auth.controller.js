// Récupération de notre model
const UserModel = require("../Model/model");
const jwt = require("jsonwebtoken");
const ObjectID = require("mongoose").Types.ObjectId;

// Création de mon Token d'autentification
const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

// Fonction d'inscription d'un utilisateur
module.exports.subscription = async (req, res) => {
  // Pour l'inscription, nous récupérons dans le body:
  const { email, password } = req.body;

  try {
    const user = await UserModel.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(201).send(user);
    console.log(user);
    // console.log(user);
    // console.log("");
    // console.log(`Successful registration : ( ID = ${user._id} )`);
    // console.log("");
    // console.log("The token is " + token);
  } catch (err) {
    if (err) {
      // res.status(400);
      // console.log(err.code);
      if (err._message) {
        res.send("incorrectEmailAddress");
        // res.send("You have entered an incorrect email address");
        console.log("You entered an incorrect email address");
      } else if (err.code) {
        res.send("emailThatAlreadyExists");
        // res.send("You entered an address email that already exists");
        console.log("You entered an address email that already exists");
      }
    }
  }
};

// // Se connecter
module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).send("The user with ID: " + user._id + " is logged in");
    // console.log(res.data);
    console.log("");
    console.log("The user with ID: " + user._id + " is logged in");
    console.log("");
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
    console.log(err._message);
  }
};

// Fonction d'inscription d'un utilisateur
module.exports.updateUser = async (req, res) => {
  // Cette condition vérifie si l'id passé est présent dans la DataBase
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID : " + req.params.id + " unknown");

  try {
    const YourProfile = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          firstName: req.body.firstName,
          Country: req.body.Country,
          City: req.body.City,
        },
      },
      { new: true }
    ).select("-password");
    res.json(YourProfile);
    console.log(YourProfile);
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports.selectButton = async (req, res) => {
  // Cette condition vérifie si l'id passé est présent dans la DataBase
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID : " + req.params.id + " unknown");

  try {
    const ChooseYouorPracticedSports = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $addToSet: {
          ChooseYouorPracticedSports: req.body.ChooseYouorPracticedSports,
        },
      },
      { new: true }
    ).select("-password");
    res.json(ChooseYouorPracticedSports);
    console.log(ChooseYouorPracticedSports);
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports.unSelectButton = async (req, res) => {
  // Cette condition vérifie si l'id passé est présent dans la DataBase
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID : " + req.params.id + " unknown");

  try {
    const ChooseYouorPracticedSports = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $pull: {
          ChooseYouorPracticedSports: req.body.ChooseYouorPracticedSports,
        },
      },
      { new: true }
    ).select("-password");
    res.json(ChooseYouorPracticedSports);
    console.log(ChooseYouorPracticedSports);
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports.aboutYou = async (req, res) => {
  // Cette condition vérifie si l'id passé est présent dans la DataBase
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID : " + req.params.id + " unknown");

  try {
    const Bio = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          bio: req.body.bio,
        },
      },
      { new: true }
    ).select("-password");
    res.json(Bio);
    console.log(Bio);
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  // res.status(200).send("Pas de token");
  res.redirect("/");
};

module.exports.updateUser = async (req, res) => {
  // if (!ObjectID.isValid(req.params.id))
  //   return res.status(400).send("ID unknown : " + req.params.id);

  try {
    const Bio = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          firstName: req.body.firstName,
          Country: req.body.Country,
          City: req.body.City,
        },
      },
      { new: true }
    );
    res.json(Bio);
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.status(200).send("Pas de token");
  // res.redirect("/");
};
