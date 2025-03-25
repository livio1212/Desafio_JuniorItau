const express = require('express')
const { getTransacoes, postTransacoes } = require('../controllers/transacaoControllers')

const router  = express.Router();

router.get("/", getTransacoes);
router.post("/", postTransacoes);

module.exports = router;
