const passport = require("passport");
const passportJWT = require("passport-jwt");
const user = require("../Model/model.js");
const jwt = require("jsonwebtoken");
const UserModel = require("../Model/model");

// passport.use(
//   new passportJWT.Strategy(
//     {
//       jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: "SECRET_KEY",
//     },
//     function (jwtPayload, done) {
//       return user
//         .findById(jwtPayload.id)
//         .then((user) => {
//           return done(null, user);
//         })
//         .catch((error) => {
//           return done(error);
//         });
//     }
//   )
// );

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        res.cookie("jwt", "", { maxAge: 1 });
        next();
      } else {
        let user = await UserModel.findById(decodedToken.id);
        res.locals.user = user;
        console.log("Token found");
        console.log(res.locals.user);
        next();
      }
    });
  } else {
    console.log("No Token found");
    next();
  }
};

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.status(200).send("Code secret is note correct");
        // res.status(200).json({ message: "Code secret is note correct" });
        console.log("Code secret is note correct");
      } else {
        // res
        //   .status(200)
        //   .json({ message: " Great !!! Your code secret is correct" });
        res.send(" Great !!! Your code secret is correct");
        console.log(" Great !!! Your code secret is correct");
        console.log(decodedToken.id);
        next();
      }
    });
  } else {
    // res.status(200).json({ message: "No Token found" });
    res.status(200).send("No Token found");
    console.log("No Token found");
    // next();
  }
};
