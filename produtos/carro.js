import Produto from "./produto.js";
export default class Carro extends Produto{
  
constructor(nome, valor, codigo, tipo){
    super(nome, valor, codigo, tipo);
}
aplicarDesconto(){
    return this.valor - this.valor * 0.30;
};
}