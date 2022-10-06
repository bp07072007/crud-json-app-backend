import app from "./app.js";
import http from "http";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT ;
app.set("port", port);
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Listening on port at : ${port}`);
});
