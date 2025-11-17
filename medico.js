const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Medico = sequelize.define("Medico", {
nome: DataTypes.STRING,
especialidade: DataTypes.STRING});
module.exports = Medico;
