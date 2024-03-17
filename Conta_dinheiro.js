export default class Conta_dinheiro{

    valorPago: float;
    dia: int;
    mes: int;
    ano: int;
    modalidade: int;
    comentario: string;
    id: int;
  
    constructor(valorPago, dia, mes, ano, modalidade, comentario){
      this.valorPago = valorPago;
      this.dia = dia;
      this.mes = mes;
      this.ano = ano;
      this.modalidade = modalidade;
      this.comentario = comentario;
      console.log('criou conta dinheiro!')
    }
  }