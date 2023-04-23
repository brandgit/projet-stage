const UserModel = require("../Model/model");
const ObjectID = require("mongoose").Types.ObjectId;

// Récupérer la liste de tous nos utilisateurs
module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
  console.log("");
  console.log("List of all users");
  console.log("");
  console.log(users);
};

// Récupérer les informations d'un utilisateur
module.exports.userInfo = (req, res) => {
  // Cette condition vérifie si l'id passé est présent dans la DataBase
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID : " + req.params.id + " unknown");

  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
      // console.log(docs._id);
      console.log("");
      console.log("Information of user");
      console.log("");
      console.log("ID : " + req.params.id + " unknown");
    } else {
      console.log("ID unknown : " + err);
    }
  }).select("-password");
};
