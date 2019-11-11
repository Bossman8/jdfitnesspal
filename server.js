require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3600;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

// routing
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Listening PORT
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
