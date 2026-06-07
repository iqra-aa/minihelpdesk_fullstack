import express from "express";
import cors from "cors";

console.log("Before importing routes");

import ticketRoutes from "./routes/ticketRoutes";

console.log("After importing routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "MiniHelpDesk API Running" });
});

app.use("/tickets", ticketRoutes);

export default app;