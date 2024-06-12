import express from "express";
import user from "./Routes/user.js";
import logger from "./middleware/logger.js";

const app = express();

//Body Parser - middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

app.use("/users", user);

app.listen(8080, () => console.log("Server has started"));
