const routes = require("./routes");
const express = require("express");

const app = express();

app.use("/", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("API server running on port: " + PORT));
