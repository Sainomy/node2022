var express = require("express");
var app = express();

const atendenteRoute = require("./routes/atendenteRoute");
const clienteRoute = require("./routes/clienteRoute");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use(express.static("./public"));

require("./config/database.js");

app.use("/atendente", atendenteRoute);
app.use("/cliente", clienteRoute);

app.listen("3000", function () {
  console.log("Conexão iniciada na porta 3000");
});
