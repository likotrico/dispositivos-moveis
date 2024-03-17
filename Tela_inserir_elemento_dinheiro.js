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

  label_comentario_compra:{
    width:320,
    height:40,
    flexDirection:'row',
    alignItems:'center',
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

import Conta_dinheiro from './Conta_dinheiro.js'
import Gastos from './test3.js'

function salvarNovoElemento(vector, valorPago, dia, mes, ano, mod, coment){
  console.log('valorPago:'+valorPago)
  console.log('dia:'+dia)
  console.log('mes:'+mes)
  console.log('ano:'+ano)
  console.log('apelido:'+mod)
  console.log('coment:'+coment)
  
  console.log('dentro')
  var elemento = new Conta_dinheiro(valorPago, dia, mes, ano, mod, coment)
  console.log("meio")
  vector.registrar_gasto_dinheiro(elemento);
  console.log(vector)
  console.log('fim')
}



export default function tela_inserir_elemento_dinheiro({route, navigation}) {

  console.log('tela_inserir_dinheiro')
  var vector = route.params.vector
  var salario = route.params.salario
  console.log(vector)
  console.log(salario)

  var valorPago = 0
  var dia = 0
  var mes = 0
  var ano = 0
  var mod = 0
  var coment = ''
  
  const mudarTelaDinheiro = () => {navigation.navigate("Tela_dinheiro", {vector, salario})}

  return (
      <View style={styles.container}>
        <View style={styles.linha_superior}></View>

        {/*TELA DO TOPO*/}
        <View style={styles.cabecalho}>
          <TouchableOpacity onPress={mudarTelaDinheiro}>
            <Image
            style={styles.imagem_barrinhas}
            source={require('/imagem_2024-03-01_121240459.png')}   
            />
          </TouchableOpacity>

          <Text style={styles.texto_cabecalho}>Inserir Elemento</Text>

        </View>

        {/*TELA ONDE FICA O CONTEÚDO*/}
        <View style={styles.tela}>
          <View style={styles.label_restante}>
            <View style={styles.label_valor_conta}>
              <Text style={styles.texto1}>Valor Pago:</Text>
              <TextInput style={styles.textinput1} inputMode='numeric' onChange={(newText) => {valorPago = newText.target.value} }>
              </TextInput>
            </View>
            
            <View style={styles.label_data_compra}>
              <Text style={styles.texto1}>Data:</Text>
              <TextInput style={styles.text_input_date} inputMode='numeric' onChange={(newText) => {dia = newText.target.value} }>
              </TextInput>
              <TextInput style={styles.text_input_date_month} inputMode='numeric' onChange={(newText) => {mes = newText.target.value} }>
              </TextInput>
              <TextInput style={styles.text_input_date_year} inputMode='numeric' onChange={(newText) => {ano = newText.target.value} }>
              </TextInput>
            </View>
            
            <View style={styles.label_modalidade_compra}>
             <Text style={styles.texto1}>Modalidade:</Text>
              <TextInput style={styles.textinput1} onChange={(newText) => {mod = newText.target.value} }>
              </TextInput>
            </View>
            
            <View style={styles.label_comentario_compra}>
              <Text style={styles.texto1}>Comentário:</Text>
              <TextInput style={styles.textinput1} onChange={(newText) => {coment = newText.target.value} }></TextInput>
            </View>

            <TouchableOpacity style={styles.botao_salvar} onPress={() => {salvarNovoElemento(vector, valorPago, dia, mes, ano, mod, coment); mudarTelaDinheiro()}} >
              <Text style={styles.text_button_save}>Salvar</Text>
            </TouchableOpacity>
            
            
          
            <View>{}</View>

          </View>

        </View>

      </View>
  )
}
