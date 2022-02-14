var express = require("express");
var app = express();
var path = require("path");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", function(req, res){
    res.render ("index.ejs", {});
});

app.post("/", function(req,res){
    res.send("Oi " + req.body.nome);
});

app.listen("3000", function(){
    console.log("Conexão iniciada na porta 3000!");
});