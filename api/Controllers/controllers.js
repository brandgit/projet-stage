const express = require("express");
const user = require("../Model/model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userValidation = require("../Validation/validation.js");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

exports.inscription = (req, res) => {
  // recuperer les données
  const { body } = req;
  //validation des données
  const { error } = userValidation(body).uservalidationSignup;
  if (error) return res.status(401).json(error.details[0].message);
  console.log(body);

  // hash du mot de passe

  bcrypt
    .hash(body.password, 10)
    .then((hash) => {
      if (!hash) return res.status(500).error({ msg: "Server Error" });

      delete body.password;
      new user({ ...body, password: hash })
        .save()
        .then((user) => {
          console.log(user);
          res.status(201).json({ msg: "User created ! " });
        })
        .catch((error) => res.status(500).json(error));
    })
    .catch((error) => res.status(500).json(error));
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

exports.connexion = (req, res) => {
  const { Email, Password } = req.body;
  // validation des éléments de connexion

  const { error } = userValidation(req.body).uservalidationlogin;
  if (error) return res.status(401).json(error.details[0].message);

  //Trouver un utilisatuer dans la base données
  user
    .findOne({ Email: Email })
    .then((user) => {
      if (!user) return res.status(404).json({ msg: "user not found " });
      console.log(user);

      //**  vérification du mot de passe

      bcrypt
        .compare(Password, user.password)
        .then((match) => {
          if (!match) return res.status(500).json({ msg: "Server error " });
          res.status(200).json({
            Email: user.Email,
            id: user._id,
            token: jwt.sign({ id: user._id }, "SECRET_KEY", {
              expiresIn: "12h",
            }),
          });
        })
        .catch((error) => res.status(500).json(error));
    })
    .catch((error) => res.status(500).json(error));
};
