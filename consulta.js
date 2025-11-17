const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Paciente = require("./paciente");
const Medico = require("./medico");
const Consulta = sequelize.define("Consulta", {
data: DataTypes.STRING});
Consulta.belongsTo(Paciente);
Consulta.belongsTo(Medico);
module.exports = Consulta;
