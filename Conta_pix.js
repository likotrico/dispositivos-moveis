export default class Conta_pix{

    valor_trans: float;
    destinatario: string;
    dia_trans: int;
    mes_trans: int;
    ano_trans: int;
    modalidade: int;
    comentario: string;
  
    constructor(valor_trans, destinatario, dia_trans, mes_trans, ano_trans, modalidade, comentario){
      this.valor_trans = valor_trans;
      this.destinatario = destinatario;
      this.dia_trans = dia_trans;
      this.mes_trans = mes_trans;
      this.ano_trans = ano_trans;
      this.modalidade = modalidade;
      this.comentario = comentario;
      console.log('criou conta pix!')
    }
  }