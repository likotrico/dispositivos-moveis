import Conta1 from "./test2.js"
import Conta_pix from "./Conta_pix.js";

export default class Gastos{
  
  vetor_cartao: Conta1[];
  vetor_pix: Conta_pix[];
  vetor_dinheiro: Conta1[];
  vetor_a_recerber: Conta1[];

  constructor(){
    this.vetor_cartao = []
    this.vetor_pix = []
    this.vetor_dinheiro = []
    this.vetor_a_recerber = []
  }

  prox_id_dinheiro(){
    
    if(this.vetor_dinheiro.length == 0) return 0
    else{
      var maior = -1
      var i 
      for(i = 0; i < this.vetor_dinheiro.length; i++){
        if(this.vetor_dinheiro[i].id > maior){
          maior = this.vetor_dinheiro[i].id 
        }
      }
      return (maior + 1)
    }
    
  }

  registrar_gasto_cartao(conta){
    this.vetor_cartao.push(conta)
  }

  registrar_gasto_pix(conta){
    this.vetor_pix.push(conta)
  } 

  registrar_gasto_dinheiro(conta){
    conta.id = this.prox_id_dinheiro()
    this.vetor_dinheiro.push(conta)
  }

  registrar_a_receber(conta){
    this.vetor_a_recerber.push(conta)
  }

  excluir_elemento_dinheiro(key){
    var i
    for(i = 0; i < this.vetor_dinheiro.length; i++){
      if(this.vetor_dinheiro[i].id == key){
        this.vetor_dinheiro.splice(i, 1)
        return
      }
    }
    return
  }

}