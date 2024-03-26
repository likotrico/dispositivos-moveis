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

function mudar_informacoes(vector, id, valor_trans, destinatario, dia_trans, mes_trans, ano_trans, modalidade, comentario){
  console.log(vector)
  console.log('valor_trans:'+valor_trans)
  console.log('destinatario:'+destinatario)
  console.log('dia:'+dia_trans)
  console.log('mes:'+mes_trans)
  console.log('ano:'+ano_trans)
  console.log('modalidade:'+modalidade)
  console.log('comentario:'+comentario)
  vector.mudar_info_elemento_pix(id, valor_trans, destinatario, dia_trans, mes_trans, ano_trans, modalidade, comentario)
}

export default function tela_editando_pix({route, navigation}) {

  console.log('tela_editando_pix')

  var salario = route.params.salario
  var vector = route.params.vector
  var elemento = route.params.elemento

  var valor_trans = elemento.valor_trans
  var destinatario = elemento.destinatario
  var dia_trans = elemento.dia_trans
  var mes_trans = elemento.mes_trans
  var ano_trans = elemento.ano_trans
  var modalidade = elemento.modalidade
  var comentario = elemento.comentario

  const mudarTelaEditarPix = () => {navigation.navigate("Tela_editar_elemento_pix", {vector, salario, elemento})}
  const mudarTelaPosOperacao = ()=>{navigation.navigate("Tela_editar_elemento_pix", {vector:vector, salario:salario, elemento:vector.retornar_elemento_pix(elemento.id)})}

  return (
      <View style={styles.container}>
        <View style={styles.linha_superior}></View>

        {/*TELA DO TOPO*/}
        <View style={styles.cabecalho}>
          <TouchableOpacity onPress={mudarTelaEditarPix}>
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
              <Text style={styles.texto1}>Valor da Transferência:</Text>
              <TextInput style={styles.textinput1} inputMode='numeric' defaultValue={valor_trans} onChange={(newText) => {valor_trans = newText.target.value}}>
              </TextInput>
            </View>
            
            <View style={styles.label_numero_parcelas}>
              <Text style={styles.texto1}>Destinatário:</Text>
              <TextInput style={styles.textinput1} defaultValue={destinatario} onChange={(newText) => {destinatario = newText.target.value}}>
              </TextInput>
            </View>
            
            <View style={styles.label_data_compra}>
              <Text style={styles.texto1}>Data da Transferência:</Text>
              <TextInput style={styles.text_input_date} inputMode='numeric' defaultValue={dia_trans} onChange={(newText) => {dia_trans = newText.target.value}}>
              </TextInput>
              <TextInput style={styles.text_input_date_month} inputMode='numeric' defaultValue={mes_trans} onChange={(newText) => {mes_trans = newText.target.value}}>
              </TextInput>
              <TextInput style={styles.text_input_date_year} inputMode='numeric' defaultValue={ano_trans} onChange={(newText) => {ano_trans = newText.target.value}}>
              </TextInput>
            </View>
            
            <View style={styles.label_modalidade_compra}>
             <Text style={styles.texto1}>Modalidade:</Text>
              <TextInput style={styles.textinput1} defaultValue={modalidade} onChange={(newText) => {modalidade = newText.target.value}}>
              </TextInput>
            </View>
            
            <View style={styles.label_comentario_compra}>
              <Text style={styles.texto1}>Comentário:</Text>
              <TextInput style={styles.textinputcomentario} multiline={true} defaultValue={comentario} onChange={(newText) => {comentario = newText.target.value}}></TextInput>
            </View>

            <TouchableOpacity style={styles.botao_salvar} onPress={()=>{mudar_informacoes(vector, elemento.id, valor_trans, destinatario, dia_trans, mes_trans, ano_trans, modalidade, comentario); mudarTelaPosOperacao()}}>
              <Text style={styles.text_button_save}>Salvar</Text>
            </TouchableOpacity>
            
            

          </View>

        </View>

      </View>
  )
}
