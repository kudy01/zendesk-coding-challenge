const routes = require("./routes");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use("/", routes);

const PORT = 3000;

app.listen(PORT, () => console.log("Server running on port: " + PORT));
