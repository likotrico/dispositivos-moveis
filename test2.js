export default class Conta1{

    valor_conta: float;
    parcelas: int;
    dia_compra: int;
    mes_compra: int;
    ano_compra: int;
    apelido_cartao: string;
    modalidade: int;
    comentario: string;
  
    constructor(valor_conta, parcelas, dia_compra, mes_compra, ano_compra, apelido_cartao, modalidade, comentario){
      this.valor_conta = valor_conta;
      this.parcelas = parcelas;
      this.dia_compra = dia_compra;
      this.mes_compra = mes_compra;
      this.ano_compra = ano_compra;
      this.apelido_cartao = apelido_cartao;
      this.modalidade = modalidade;
      this.comentario = comentario;
      //console.log('criou!')
    }
  }