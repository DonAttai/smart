const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 3500;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", require("./routes/pages.route"));

app.listen(PORT, () => console.log(`running on port: ${PORT}`));
