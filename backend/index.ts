import express from "express";
import connectDB from "./config/dbConfig";

connectDB()
  .then(() => {
    const app = express();

    const PORT = process.env.PORT || 5000;

    app.get("/", (req, res) => {
      res.send("<h1>Server is up and running :)</h1>");
    });

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT} :)`);
    });
  })
  .catch(err => {
    console.log("Error Connecting to database :(");
  });
