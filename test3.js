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

  prox_id_cartao(){
    
    if(this.vetor_cartao.length == 0) return 0
    else{
      var maior = -1
      var i 
      for(i = 0; i < this.vetor_cartao.length; i++){
        if(this.vetor_cartao[i].id > maior){
          maior = this.vetor_cartao[i].id 
        }
      }
      return (maior + 1)
    }
    
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
    conta.id = this.prox_id_cartao()
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

  excluir_elemento_cartao(key){
    var i
    for(i = 0; i < this.vetor_cartao.length; i++){
      if(this.vetor_cartao[i].id == key){
        this.vetor_cartao.splice(i, 1)
        return
      }
    }
    return
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

  mudar_info_elemento_cartao(key, valor_conta, parcelas, dia_compra, mes_compra, ano_compra, modalidade, apelido_cartao, comentario){
    var i
    for(i=0; i<this.vetor_cartao.length;i++){
      if(this.vetor_cartao[i].id == key){
        this.vetor_cartao[i].valor_conta = valor_conta
        this.vetor_cartao[i].parcelas = parcelas
        this.vetor_cartao[i].dia_compra = dia_compra
        this.vetor_cartao[i].mes_compra = mes_compra
        this.vetor_cartao[i].ano_compra = ano_compra
        this.vetor_cartao[i].modalidade = modalidade
        this.vetor_cartao[i].apelido_cartao = apelido_cartao
        this.vetor_cartao[i].comentario = comentario
        return
      }
    }
    return
  }

  mudar_info_elemento_dinheiro(key, valorPago, dia, mes, ano, modalidade, comentario){
    var i
    for(i=0; i<this.vetor_dinheiro.length;i++){
      if(this.vetor_dinheiro[i].id == key){
        this.vetor_dinheiro[i].valorPago = valorPago
        this.vetor_dinheiro[i].dia = dia
        this.vetor_dinheiro[i].mes = mes
        this.vetor_dinheiro[i].ano = ano
        this.vetor_dinheiro[i].modalidade = modalidade
        this.vetor_dinheiro[i].comentario = comentario
        return
      }
    }
    return
  }

  retornar_elemento_cartao(key){
    var i
    for(i=0; i<this.vetor_cartao.length;i++){
      if(this.vetor_cartao[i].id == key){
        return this.vetor_cartao[i]
      }
    }
    return null
  }

  retornar_elemento_dinheiro(key){
    var i
    for(i=0; i<this.vetor_dinheiro.length;i++){
      if(this.vetor_dinheiro[i].id == key){
        return this.vetor_dinheiro[i]
      }
    }
    return null
  }

}