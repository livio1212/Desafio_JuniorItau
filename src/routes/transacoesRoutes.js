const express = require('express')
const { getTransacoes, postTransacoes } = require('../controllers/transacaoControllers');
const { deletarTransacoes } = require('../models/transacaoModels');

const router  = express.Router();

router.get("/", getTransacoes);
router.post("/", postTransacoes);
router.delete("/", deletarTransacoes)

module.exports = router;
