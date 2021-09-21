import express from "express";
import './database';
import routes from "./routes";
// import { connect } from "./server";
const port = 3001;
const HOST = "0.0.0.0";
const app = express();
app.use(express.json());
routes(app);

app.listen(port, HOST, () => {
  console.log("listening ...");
});
