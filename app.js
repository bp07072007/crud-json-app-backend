import express from "express";
import bodyParser from "body-parser";
import router from "./routers/ContactRouter.js";
import cors from "cors";

// create our express app
const app = express();
// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// route

app.use("/", router);

export default app;
