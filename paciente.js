const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Paciente = sequelize.define("Paciente", {
nome: DataTypes.STRING,
idade: DataTypes.INTEGER});
module.exports = Paciente;
