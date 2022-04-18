const { Op } = require("sequelize");
const Atendente = require("../models/Atendente");

async function abreadd(req, res) {
  res.render("atendente/add.ejs", {});
}

async function add(req, res) {
  const { nome, funcao, carga } = req.body;
  const foto = req.file.filename;
  await Atendente.create({ nome, funcao, carga, foto }).then((atendente) => {
    res.redirect("/atendente");
  });
}

async function abreedt(req, res) {
  let atendente = await Atendente.findByPk(req.params.id);
  res.render("atendente/edt.ejs", { atendente: atendente });
}

async function edt(req, res) {
  let atendente = await Atendente.findByPk(req.params.id);
  atendente.nome = req.body.nome;
  atendente.funcao = req.body.funcao;
  atendente.carga = req.body.carga;

  if (req.file.filename != "") {
    atendente.foto = req.file.filename;
  }
  await atendente.save();
  res.redirect("/atendente");
}

async function list(req, res) {
  let atendentes = await Atendente.findAll();
  res.render("atendente/index.ejs", { Atendentes: atendentes });
}

async function listfiltro(req, res) {
  let pesquisar = req.body.pesquisar;
  let atendentes = await Atendente.findAll({
    where: { nome: { [Op.like]: "%" + pesquisar + "%" } },
  });
  res.render("atendente/index.ejs", { Atendentes: atendentes });
}

async function del(req, res) {
  let atendente = await Atendente.findByPk(req.params.id);
  await atendente.destroy();
  res.redirect("/atendente");
}

module.exports = { abreadd, add, abreedt, edt, list, listfiltro, del };
