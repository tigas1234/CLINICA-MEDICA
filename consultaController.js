const Consulta = require("../models/consulta");

module.exports = {
async criar(req, res) {
 const dado = await Consulta.create(req.body);
res.json(dado);},

async listar(req, res) {
const dados = await Consulta.findAll();
res.json(dados); },

async buscar(req, res) {
const dado = await Consulta.findByPk(req.params.id);
 res.json(dado);},

async atualizar(req, res) {
await Consulta.update(req.body, { where: { id: req.params.id } });
res.json({ ok: true });},

async deletar(req, res) {
await Consulta.destroy({ where: { id: req.params.id } });
res.json({ ok: true });}};
