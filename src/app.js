import express from "express";
import { config } from "dotenv";
import connectDb from "./db/index.js";
import router from "./routes/index.js";
// to include the environment
config();

// creating a application
const app = express();

// to convert the req.body to json
app.use(express.json());

// to include the app routes
app.use(router);

// to start the application
app.listen(process.env.PORT, () => {
  connectDb().then(() => {
    console.log("app listening on port " + process.env.PORT);
  });
});
