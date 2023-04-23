const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@mern-project.sbs1p.mongodb.net/sportevent"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB   ", err));
