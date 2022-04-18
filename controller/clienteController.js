const { Op } = require("sequelize");
const Cliente = require("../models/Cliente");

async function abreadd(req, res) {
  res.render("cliente/add.ejs", {});
}

async function add(req, res) {
  const { nome, telefone, data, cpf } = req.body;
  console.log(req.body);
  await Cliente.create({ nome, telefone, data, cpf }).then((cliente) => {
    res.redirect("/cliente");
  });
}

async function abreedt(req, res) {
  let cliente = await Cliente.findByPk(req.params.id);
  res.render("cliente/edt.ejs", { cliente: cliente });
}

async function edt(req, res) {
  let cliente = await Cliente.findByPk(req.params.id);
  cliente.nome = req.body.nome;
  cliente.telefone = req.body.telefone;
  cliente.data = req.body.data;
  cliente.cpf = req.body.cpf;

  await cliente.save();
  res.redirect("/cliente");
}

async function list(req, res) {
  let clientes = await Cliente.findAll();
  res.render("cliente/index.ejs", { Clientes: clientes });
}

async function listfiltro(req, res) {
  let pesquisar = req.body.pesquisar;
  let clientes = await Cliente.findAll({
    where: { nome: { [Op.like]: "%" + pesquisar + "%" } },
  });
  res.render("cliente/index.ejs", { Clientes: clientes });
}

async function del(req, res) {
  let cliente = await Cliente.findByPk(req.params.id);
  await cliente.destroy();
  res.redirect("/cliente");
}

module.exports = { abreadd, add, abreedt, edt, list, listfiltro, del };
