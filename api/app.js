import express from "express";
import bodyParser from "body-parser";
import router from "./routes";

import _ from "./serverConfig/env";

const PORT = process.env.PORT;
const app = express();

app.use("/", router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
