const express = require('express');
const router = express.Router();
const Produto = require('../model/produto');

// criando funções de middleware
const findById = async (req, res, next) => {
  req.produto = await Produto.findById(req.params.id);
  next();
};

// retorne todos os produtos
router.get('/', async (req, res) => {
  res.json(await Produto.find());
});

// retorne o produto com o id especificado
router.get('/:id', findById, async (req, res) => {
  res.json(req.produto);
});

// adicionar um novo produto
router.post('/', async (req, res) => {
  res.json(await new Produto(req.body).save());
});

// alterar o produto com o id especificado
router.put('/:id', findById, async (req, res) => {
  res.json(await req.produto.set(req.body).save());
});

// remover o produto com o id especificado
router.delete('/:id', findById, async (req, res) => {
  req.produto.remove();
  res.json({mensagem: 'Produto removido com sucesso'});
});

module.exports = router;