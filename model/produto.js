const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: String,
  foto: String,
  valor: Number
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Produto', produtoSchema);
