const Produto = require('./model/produto');

// Se a coleção de produtos estiver vazia, adicionamos alguns
const adicionarProdutos = async () => {
  if (await Produto.count() === 0) {
    await new Produto({nome: 'Feijoada', valor: 29.99, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/002/998/355811/355811_original.jpg?mode=crop&width=710&height=400'}).save();
    await new Produto({nome: 'Bolo', valor: 19.99, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/048/083/329518/329518_original.jpg?mode=crop&width=710&height=400'}).save();
    await new Produto({nome: 'Batata Frita', valor: 12.00, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/018/897/164773/164773_original.jpg?mode=crop&width=710&height=400'}).save();
    await new Produto({nome: 'Feijoada', valor: 29.99, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/002/998/355811/355811_original.jpg?mode=crop&width=710&height=400'}).save();
    await new Produto({nome: 'Bolo', valor: 19.99, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/048/083/329518/329518_original.jpg?mode=crop&width=710&height=400'}).save();
    await new Produto({nome: 'Batata Frita', valor: 12.00, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/018/897/164773/164773_original.jpg?mode=crop&width=710&height=400'}).save();
    await new Produto({nome: 'Feijoada', valor: 29.99, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/002/998/355811/355811_original.jpg?mode=crop&width=710&height=400'}).save();
    await new Produto({nome: 'Bolo', valor: 19.99, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/048/083/329518/329518_original.jpg?mode=crop&width=710&height=400'}).save();
    await new Produto({nome: 'Batata Frita', valor: 12.00, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/018/897/164773/164773_original.jpg?mode=crop&width=710&height=400'}).save();
    await new Produto({nome: 'Feijoada', valor: 29.99, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/002/998/355811/355811_original.jpg?mode=crop&width=710&height=400'}).save();
    await new Produto({nome: 'Bolo', valor: 19.99, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/048/083/329518/329518_original.jpg?mode=crop&width=710&height=400'}).save();
    await new Produto({nome: 'Batata Frita', valor: 12.00, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/018/897/164773/164773_original.jpg?mode=crop&width=710&height=400'}).save();
  }
};

const bootstrap = () => {
  adicionarProdutos();
};

module.exports = {
  bootstrap
};