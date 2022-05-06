if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import express from "express";
import connectDB from "./config/dbConfig";
import authRoutes from "./routes/auth";
import cors from "cors";

connectDB();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("*", (req, res) => {
  res.send("<h1>Server is up and running :)</h1>");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} :)`);
});
