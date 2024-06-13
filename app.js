import express from "express";
import user from "./routes/user.js";
import logger from "./middleware/logger.js";
import serverNotFound from "./middleware/notFoundError.js";

const app = express();

//Body Parser - middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

app.use("/users", user);

//server not found
app.use(serverNotFound);

app.listen(8080, () => console.log("Server has started"));
