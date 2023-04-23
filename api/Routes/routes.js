// const passport = require("passport");

// const { connexion, inscription } = require("../Controllers/controllers");
const router = require("express").Router();
const authController = require("../Controllers/auth.controller");
const userController = require("../Controllers/user.controller");

// Auth Routes
router.post("/subscription", authController.subscription);
// router.post("/connection", authController.connection);
router.post("/login", authController.signIn);
router.put("/:id", authController.updateUser);
router.get("/logout", authController.logout);

//Liste de tous nos utilisateur
router.get("/", userController.getAllUsers);

//Récupérer les infos d'un user par son id
router.get("/:id", userController.userInfo);

module.exports = router;

// router.post("/inscription", inscription);
// router.post("/connexion", connexion);

// router.use(passport.authenticate("jwt", { session: false }));
// router.get("/", (req, res) => {
//   res.send("route protégé");
// });
