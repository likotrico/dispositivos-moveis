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

  texto_restante:{
    fontSize:17,
    flex:1,
    textAlign:'center',
    fontWeight: 'bold',
},

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

export default function tela_editar_elemento_pix({route, navigation}) {

  console.log('tela_editar_elemento_pix')

  var salario = route.params.salario
  var vector = route.params.vector
  var elemento = route.params.elemento

  const mudarTelaPix = () => {navigation.navigate("Tela_pix", {vector, salario})}
  const mudarEditandoPix = () => {navigation.navigate("Tela_editando_pix", {vector, salario, elemento})}

  return (
      <View style={styles.container}>
        <View style={styles.linha_superior}></View>

        {/*TELA DO TOPO*/}
        <View style={styles.cabecalho}>
          <TouchableOpacity onPress={mudarTelaPix}>
            <Image
            style={styles.imagem_barrinhas}
            source={require('/imagem_2024-03-01_121240459.png')}   
            />
          </TouchableOpacity>

          <Text style={styles.texto_cabecalho}>Editar Elemento</Text>

        </View>

        {/*TELA ONDE FICA O CONTEÚDO*/}
        <View style={styles.tela}>
          <View style={styles.label_restante}>
            <View style={styles.label_valor_conta}>
              <Text style={styles.texto1}>Valor da Transferência:</Text>
              <Text style={styles.texto_restante}>{elemento.valor_trans}</Text>
            </View>
            
            <View style={styles.label_numero_parcelas}>
              <Text style={styles.texto1}>Destinatário:</Text>
              <Text style={styles.texto_restante}>{elemento.destinatario}</Text>
            </View>
            
            <View style={styles.label_data_compra}>
              <Text style={styles.texto1}>Data da Transferência:</Text>
              <Text style={styles.texto_restante}>{elemento.dia_trans}</Text>
              <Text style={styles.texto_restante}>{elemento.mes_trans}</Text>
              <Text style={styles.texto_restante}>{elemento.ano_trans}</Text>
            </View>
            
            <View style={styles.label_modalidade_compra}>
             <Text style={styles.texto1}>Modalidade:</Text>
             <Text style={styles.texto_restante}>{elemento.modalidade}</Text>
            </View>
            
            <View style={styles.label_comentario_compra}>
              <Text style={styles.texto1}>Comentário:</Text>
              <Text style={styles.texto_restante}>{elemento.comentario}</Text>
            </View>

            <TouchableOpacity style={styles.botao_salvar} onPress={mudarEditandoPix}>
              <Text style={styles.text_button_save}>Editar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botao_salvar} onPress={()=>{vector.excluir_elemento_pix(elemento.id); mudarTelaPix()}}>
              <Text style={styles.text_button_save}>Excluir</Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>
  )
}
