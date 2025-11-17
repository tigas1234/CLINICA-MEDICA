const Paciente = require("../models/paciente");

module.exports = {
async criar(req, res) {
const dado = await Paciente.create(req.body);
res.json(dado);},

async listar(req, res) {
const dados = await Paciente.findAll();
res.json(dados);},

async buscar(req, res) {
const dado = await Paciente.findByPk(req.params.id);
res.json(dado); },


async atualizar(req, res) {
 await Paciente.update(req.body, { where: { id: req.params.id } });
res.json({ ok: true });},

async deletar(req, res) {
await Paciente.destroy({ where: { id: req.params.id } });
res.json({ ok: true });}};
