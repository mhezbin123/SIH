import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import rootRouter from "./routes/index.js";

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));

main().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/v1", rootRouter);

async function main() {
  try {
    const MONGO_URI = process.env.DB_URI;
    await mongoose.connect(MONGO_URI); // No need for useNewUrlParser or useUnifiedTopology
    console.log("db connected");
    app.listen(PORT, () => {
      console.log(`Server started, listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}