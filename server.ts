import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import mongoose from "mongoose";

const PORT = 5000;

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});