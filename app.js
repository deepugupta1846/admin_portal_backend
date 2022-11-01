import express from "express";
import connectdb from "./DB/index.js";
import route from "./routers/routes.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
const DATABASE_URL =
  "mongodb+srv://deepukumar:deepukumar@cluster0.b2fz1fm.mongodb.net/userdata?retryWrites=true&w=majority";
connectdb(DATABASE_URL);

app.use("/adminportal", route);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("listening.....");
});
