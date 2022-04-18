const sequelize = require("sequelize");

const dbconfig = require("./dbconfig.js");

const conexao = new sequelize(dbconfig);

const Atendente = require("../models/Atendente");
const Cliente = require("../models/Cliente");

Atendente.init(conexao);
Cliente.init(conexao);

module.exports = conexao;
