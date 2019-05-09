import express from "express";
import bodyParser from "body-parser";
import router from "./routes";

import _ from "./config/env";
import { DatabaseConnection } from "./database/database";

const PORT = process.env.PORT || 3000;
const app = express();

let db = new DatabaseConnection();

app.use("/", router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
