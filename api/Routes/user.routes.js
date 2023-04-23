// Importation de l'objet Router d'Express qui nous permet de créer des routes
const router = require("express").Router();
const authController = require("../Controllers/auth.controller");
const userController = require("../Controllers/user.controller");

// authController
// Route d'inscription d'un utilisateur
router.post("/subscription", authController.subscription);
router.put("/update/:id", authController.updateUser);
router.patch("/selectButton/:id", authController.selectButton);
router.patch("/unselectButton/:id", authController.unSelectButton);
router.put("/aboutYou/:id", authController.aboutYou);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

// router.get("/logout", authController.logout);

// userController
//Liste de tous nos utilisateur
router.get("/", userController.getAllUsers);
//Récupérer les infos d'un user par son id
router.get("/:id", userController.userInfo);

module.exports = router;
