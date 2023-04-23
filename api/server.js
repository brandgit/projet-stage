// Importation d'Express
const express = require("express");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { checkUser, requireAuth } = require("./middlewares/auth.middelwer");

// Récuperation de toutes les routes dans routes
const userRoutes = require("./Routes/user.routes");
// Chemin de notre variable d'environement
require("dotenv").config({ path: "./config/.env" });
//Chemin de notre base de données
require("./DB/db");

// Déclaration de notre application Express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

// L'execution de toutes les routes
app.use("/api/user", userRoutes);

// Ecoute de notre Server
app.listen(process.env.PORT, () =>
  console.log(`Server listen on port ${process.env.PORT}`)
);

// // jwt
// app.use("*", checkUser);
// app.get("/jwtid", requireAuth, (req, res) => {
//   res.status(200).send(res.locals.user._id);
// });
