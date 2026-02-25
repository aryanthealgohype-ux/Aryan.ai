import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./routes/contact.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/contact", contactRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API server running on http://localhost:${port}`);
});
