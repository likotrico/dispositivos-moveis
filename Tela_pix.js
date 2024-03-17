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

  label_info_geral:{
    flex: 1,
    backgroundColor:'orange',
  },

  label_preco_trans:{
    //flex:1,
    flexDirection:'row',
    height: 15,
    backgroundColor:'#4169E1',
    verticalAlign:'center',
  },

  label_preco:{
    flex:1,
    backgroundColor:'#FFA500',
    justifyContent:'center',
  },

  label_destinatario:{
    flex:1,
    justifyContent:'center',
  },

  label_comentario:{
    //flex:1,
    height: 15,
    backgroundColor:'#00FFFF',
    verticalAlign:'center',
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

  texto_botao:{
    fontSize:25,
  },

  texto_preco:{
    fontSize: 17,
    fontWeight: 'bold',
  },

  texto_destinatario:{
    fontSize: 12,
  },

  texto_comentario:{
    fontSize:10,
  },

  //TouchableOpacity
  botao1:{
    width:300,
    paddingLeft:5,
    paddingRight:5,
    borderWidth:5,
    borderRadius:10,
    borderColor:'red',
    backgroundColor:'green',
    flexDirection:'row',
    columnGap: 5,
    alignItems:'center',
  },


  //IMAGENS
  imagem_barrinhas:{
    //flex: 1,
    width:100,
    height:60,
    //textAlign:'center',
    //textAlignVertical:'center',
  },

  imagem_botao:{
    borderRadius:5,
    width:25,
    height:25,
  },

});

export default function tela_pix({route, navigation}) {

  console.log('tela_pix')
  var vector = route.params.vector
  console.log(vector)
  var vetor_pix = vector.vetor_pix
  //console.log(vetor_pix)
  var salario = route.params.salario
  //console.log(salario)

  const mudarTelaGastos = () => {navigation.navigate("Tela_gastos", {vector, salario})}
  const mudarTelaInserirElemento = () => {navigation.navigate("Tela_inserir_elemento_pix", {vector, salario})}

  return (
      <View style={styles.container}>
        <View style={styles.linha_superior}></View>


        {/*TELA DO TOPO*/}
        <View style={styles.cabecalho}>
          <TouchableOpacity onPress={(mudarTelaGastos)}>
            <Image
            style={styles.imagem_barrinhas}
            source={require('/imagem_2024-03-01_121240459.png')}   
            />
          </TouchableOpacity>

          <Text style={styles.texto_cabecalho}>PIX</Text>

        </View>

        {/*TELA ONDE FICA O CONTEÚDO*/}
        <View style={styles.tela}>

          <View style={styles.label_restante}>

            <TouchableOpacity style={styles.botao1} onPress={mudarTelaInserirElemento}>
              <Image
              style={styles.imagem_botao}
              source={require('/imagem_2024-03-01_121240459.png')}   
              />
              <Text style={styles.texto_botao}>Inserir Novo Elemento</Text>
            </TouchableOpacity>

            {vetor_pix.map((vetor_pix) => {
            return (
              <TouchableOpacity  style={styles.botao1}>
              <Image
              style={styles.imagem_botao}
              source={require('./imagem_2024-03-01_121240459.png')}   
              />
              <View style={styles.label_info_geral}>
                <View style={styles.label_preco_trans}>
                  <View style={styles.label_preco}>
                    <Text style={styles.texto_preco}>R$: {vetor_pix.valor_trans}</Text>
                  </View>
                  <View style={styles.label_destinatario}>
                    <Text style={styles.texto_destinatario}>{vetor_pix.destinatario}</Text>
                  </View>
                </View>
                <View style={styles.label_comentario}>
                  <Text style={styles.texto_comentario}>{vetor_pix.comentario}</Text>
                </View>
                
              </View>
            </TouchableOpacity>
            );
            })}

          </View>

        </View>

      </View>
  )
}
