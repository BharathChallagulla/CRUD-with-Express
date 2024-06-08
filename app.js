import express from "express";
import user from "./Routes/user.js";

const app = express();

app.get("/", (req, res) => console.log("server created successfully"));

app.listen(8080, () => console.log("Server has started"));
