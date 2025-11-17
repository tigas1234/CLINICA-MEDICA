const Medico = require("../models/medico");

module.exports = {
async criar(req, res) {
const dado = await Medico.create(req.body);
res.json(dado);},

async listar(req, res) {
const dados = await Medico.findAll();
res.json(dados);},

async buscar(req, res) {
const dado = await Medico.findByPk(req.params.id);
res.json(dado);},

async atualizar(req, res) {
await Medico.update(req.body, { where: { id: req.params.id } });
res.json({ ok: true });},

async deletar(req, res) {
 await Medico.destroy({ where: { id: req.params.id } });
res.json({ ok: true });}};
