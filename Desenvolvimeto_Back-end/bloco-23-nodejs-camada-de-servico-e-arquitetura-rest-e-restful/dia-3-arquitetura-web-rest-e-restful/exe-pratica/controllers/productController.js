const express = require('express');
const productServices = require('../services/productServices');

const router = express.Router();

router.get('/all', async (_req, res, next) => {
  try {
    const products = await productServices.getAll();
  
    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
});

router.get('/product/:id', async (req, res, next) => {
  try {
    const product = await productServices.getById(req.params.id);
  
    return res.status(200).json(product)
  } catch (error) {
    next(error)
  }
});

router.post('/product/register', async (req, res, next) => {
  try {
    const { name, brand } = req.body;
  
    const newProduct = await productServices.add(name, brand);
  
    return res.status(201).json(newProduct)
  } catch (error) {
    next(error)
  }
});

router.delete('/product/delete/:id', async (req, res, next) => {
  try {
    const products = await productServices.exclude(req.params.id);
  
    return res.status(201).json(products)
  } catch (error) {
    next(error)
  }
});

router.put('/product/update/:id', async (req, res, next) => {
  try {
    const { name, brand } = req.body;
  
    const products = await productServices.update(req.params.id, name, brand);

    return res.status(204).json(products)
  } catch (error) {
    next(error)
  }
});

module.exports = router;