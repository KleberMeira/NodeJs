const { Router } = require('express')
const cadTipoProdutoController = require('../controllers/CadTipoProdutoController')


const router = Router()

router.get('/tipoProduto', cadTipoProdutoController.listarProdutos)