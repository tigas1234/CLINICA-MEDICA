const express = require("express");
const sequelize = require("./src/config/database");
const pacienteRoutes = require("./src/routes/pacienteRoutes");
const medicoRoutes = require("./src/routes/medicoRoutes");
const consultaRoutes = require("./src/routes/consultaRoutes");
const app = express();
app.use(express.json());
app.use("/pacientes", pacienteRoutes);
app.use("/medicos", medicoRoutes);
app.use("/consultas", consultaRoutes);
sequelize.sync().then(() => {
app.listen(3000, () => {
console.log("Servidor rodando");});});
