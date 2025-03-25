const express = require("express");
const cors = require("cors");
const transacoesRoutes = require("./routes/transacoesRoutes");

const app = express();

app.use(cors());
app.use(express.json()); // Middleware para permitir JSON
app.use("/transacoes", transacoesRoutes);

module.exports = app;