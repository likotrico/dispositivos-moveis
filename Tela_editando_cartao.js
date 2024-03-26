import {useState} from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  
  linha_superior:{
    flex: 3,
    backgroundColor: 'white',
  },

  container:{
    flex: 9,
    flexDirection: 'comumn',
    backgroundColor: 'gray',
  },

  cabecalho:{
    flex: 10,
    flexDirection: 'row',
    backgroundColor: 'red',
  },

  tela:{
    flex: 87,
    flexDirection: 'column',
    backgroundColor: 'yellow',
  },


  label_restante:{
    marginTop:15,
    flex: 7.5,
    flexDirection:'column',
    alignItems:'center',
    backgroundColor: 'yellow',
    rowGap:10,
  },

  label_valor_conta:{
    width:320,
    height:40,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'green',
  },

  label_numero_parcelas:{
    width:320,
    height:40,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'pink',
  },

  label_data_compra:{
    width:320,
    height:40,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'blue',
  },

  label_modalidade_compra:{
    width:320,
    height:40,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'orange',
  },

  label_apelido_cartao:{
    width:320,
    height:40,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'gray',
  },

  label_comentario_compra:{
    width:320,
    height:150,
    flexDirection:'row',
    //alignItems:'center',
    backgroundColor:'violet',
  },
  
  //PARTE DE TEXTOS

  texto_cabecalho:{
    flex: 1,
    fontSize: 35,
    fontFamily: 'arial',
    fontStyle: 'normal',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  }, 

  texto1:{
    //margin:10,
    fontSize:15,
    width:120,
    textAlign:'center',
    fontWeight: 'bold',
  },
  
  textinput1:{
    marginLeft:10,
    marginRight:10,
    width:150,
    height:30,
    borderWidth:2,
    borderRadius:5,
    backgroundColor:'white',
    textAlign:'center',
  },

  textinputcomentario:{
    marginLeft:10,
    marginRight:10,
    width:150,
    height:140,
    borderWidth:2,
    borderRadius:5,
    backgroundColor:'white',
    textAlignVertical:'top',
    numberOfLines:15,
  },

  text_input_date:{
    marginLeft:10,
    //marginRight:10,
    width:50,
    borderWidth:2,
    borderRadius:5,
    backgroundColor:'red',
    textAlign:'center',
  },

  text_input_date_month:{
    width:50,
    borderWidth:2,
    borderRadius:5,
    backgroundColor:'red',
    textAlign:'center',
  },

  text_input_date_year:{
    width:50,
    borderWidth:2,
    borderRadius:5,
    backgroundColor:'red',
    textAlign:'center',
  },

  text_button_save:{
    fontSize:20,
    color:'white',
    fontWeight: 'bold',
  },

  //TouchableOpacity
  botao_salvar:{
    borderWidth:2,
    borderRadius:5,
    width:120,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue',
  },

  //IMAGENS
  imagem_barrinhas:{
    //flex: 1,
    width:100,
    height:60,
    //textAlign:'center',
    //textAlignVertical:'center',
  },

});

function mudar_informacoes(vector, id, valor_conta, parcelas, dia_compra, mes_compra, ano_compra, modalidade, apelido_cartao, comentario){
  console.log(vector)
  console.log("valor_conta:"+valor_conta)
  console.log("parcelas:"+parcelas)
  console.log("dia_compra:"+dia_compra)
  console.log("mes_compra:"+mes_compra)
  console.log("ano_compra:"+ano_compra)
  console.log("modalidade:"+modalidade)
  console.log("apelido_cartao:"+apelido_cartao)
  console.log("comentario:"+comentario)
  vector.mudar_info_elemento_cartao(id, valor_conta, parcelas, dia_compra, mes_compra, ano_compra, modalidade, apelido_cartao, comentario)
}


export default function tela_editando_cartao({route, navigation}) {

  console.log('tela_editando_cartao')

  var vector = route.params.vector
  var salario = route.params.salario
  var elemento = route.params.elemento

  const mudarTelaEditarExcluirElemento = () => {navigation.navigate("Tela_editar_elemento_cartao", ({vector, salario, elemento}))}
  const mudarTelaPosOperacao = ()=>{navigation.navigate("Tela_editar_elemento_cartao", {vector:vector, salario:salario, elemento:vector.retornar_elemento_cartao(elemento.id)})}

  var valor_conta = elemento.valor_conta
  var parcelas = elemento.parcelas
  var dia_compra = elemento.dia_compra
  var mes_compra = elemento.mes_compra
  var ano_compra = elemento.ano_compra
  var modalidade = elemento.modalidade
  var apelido_cartao = elemento.apelido_cartao
  var comentario = elemento.comentario

  return (
      <View style={styles.container}>
        <View style={styles.linha_superior}></View>

        {/*TELA DO TOPO*/}
        <View style={styles.cabecalho}>
          <TouchableOpacity onPress={mudarTelaEditarExcluirElemento}>
            <Image
            style={styles.imagem_barrinhas}
            source={require('/imagem_2024-03-01_121240459.png')}   
            />
          </TouchableOpacity>

          <Text style={styles.texto_cabecalho}>Editando Elemento</Text>

        </View>

        {/*TELA ONDE FICA O CONTEÚDO*/}
        <View style={styles.tela}>
          <View style={styles.label_restante}>
            <View style={styles.label_valor_conta}>
              <Text style={styles.texto1}>Valor da Compra:</Text>
              <TextInput style={styles.textinput1} defaultValue={elemento.valor_conta} onChange={(newText) => {valor_conta = newText.target.value}}>
              </TextInput>
            </View>
            
            <View style={styles.label_numero_parcelas}>
              <Text style={styles.texto1}>Parcelas:</Text>
              <TextInput style={styles.textinput1} inputMode='numeric' defaultValue={elemento.parcelas} onChange={(newText) => {parcelas = newText.target.value}}>
              </TextInput>
            </View>
            
            <View style={styles.label_data_compra}>
              <Text style={styles.texto1}>Data da compra:</Text>
              <TextInput style={styles.text_input_date} inputMode='numeric' defaultValue={elemento.dia_compra} onChange={(newText) => {dia_compra = newText.target.value}}>
              </TextInput>
              <TextInput style={styles.text_input_date_month} inputMode='numeric' defaultValue={elemento.mes_compra} onChange={(newText) => {mes_compra = newText.target.value}}>
              </TextInput>
              <TextInput style={styles.text_input_date_year} inputMode='numeric' defaultValue={elemento.ano_compra} onChange={(newText) => {ano_compra = newText.target.value}}>
              </TextInput>
            </View>
            
            <View style={styles.label_modalidade_compra}>
             <Text style={styles.texto1}>Modalidade:</Text>
              <TextInput style={styles.textinput1} defaultValue={elemento.modalidade} onChange={(newText) => {modalidade = newText.target.value}}>
              </TextInput>
            </View>
            
            <View style={styles.label_apelido_cartao}>
              <Text style={styles.texto1}>Cartão:</Text>
              <TextInput style={styles.textinput1} defaultValue={elemento.apelido_cartao} onChange={(newText) => {apelido_cartao = newText.target.value}}></TextInput>
            </View>
            
            <View style={styles.label_comentario_compra}>
              <Text style={styles.texto1}>Comentário:</Text>
              <TextInput style={styles.textinputcomentario} multiline={true} defaultValue={elemento.comentario} onChange={(newText) => {comentario = newText.target.value}}></TextInput>
            </View>

            <TouchableOpacity style={styles.botao_salvar} onPress={()=>{mudar_informacoes(vector, elemento.id, valor_conta, parcelas, dia_compra, mes_compra, ano_compra, modalidade, apelido_cartao, comentario); mudarTelaPosOperacao()}}>
              <Text style={styles.text_button_save}>Salvar</Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>
  )
}
