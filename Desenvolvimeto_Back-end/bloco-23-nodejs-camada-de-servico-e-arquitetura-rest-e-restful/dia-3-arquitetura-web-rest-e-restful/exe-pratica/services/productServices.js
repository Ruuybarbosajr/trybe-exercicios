const productsModel =  require('../models/productModel')

async function add (name, brand) {
  if (!name || !brand) {
    const error = {status: 400, message: 'o nome e o brand ta certim? confere ai'}
    throw error
  }

  const productAdd = await productsModel.add(name, brand)

  return productAdd
}

async function getAll () {
  const allProducts = await productsModel.getAll()

  if (!allProducts.length) {
    const error = {status: 400, message: 'tem nada aqui pro cê, da um pulinho aqui depois!!!'}
    throw error
  }

  return allProducts
}

async function getById (id) {
  const productById = await productsModel.getById(id)

  if (!productById.length) {
    const error = {status: 400, message: 'iiiiihhhh, sem produto com esse id, tem certeza que ta certo?'}
    throw error
  }

  return productById
}


async function update (id, name, brand) {
  const uptadeProduct = await productsModel.update(id, name, brand)

  if (!uptadeProduct.changedRows) {
    const error = {status: 400, message: 'é aquele ditado né "tente mais tarde!!!"'}
    throw error
  }

  const productUpdated = await productsModel.getById(id)

  return productUpdated
}

async function exclude (id) {
  const deletedProduct = await productsModel.exclude(id)

  if (!deletedProduct) {
    const error =  {status: 400, message: 'o id não existe ou eu sou burro e não soube apagar, cola ai depois'}
    throw error
  }

  return {
    message: 'apagouuuu'
  }
}

module.exports = {
  add,
  getAll,
  getById,
  update,
  exclude
}