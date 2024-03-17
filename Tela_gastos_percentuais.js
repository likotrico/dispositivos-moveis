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
    backgroundColor: 'blue',
  },

  label_salario:{
    flex: 1,
    backgroundColor:'green',
  },

  label_graph:{
    flex: 9,
    backgroundColor: 'yellow',
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
    //lineHeight: 55,
  }, 

  texto_salario:{
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: 40,
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

export default function tela_gastos_percentuais({route, navigation}) {

  {/*ATRIBUINDO O VALOR DO SALÁRIO EM QUESTÃO*/}
  console.log('tela_gastos_percentuais')
  var vector = route.params.vector
  console.log(vector)
  var salario = route.params.salario
  const mudarTelaMenu = () => {navigation.navigate("Tela_menu",{vector, salario})}
  
  return (
      

      <View style={styles.container}>
        <View style={styles.linha_superior}></View>


        {/*TELA DO TOPO*/}
        <View style={styles.cabecalho}>
          <TouchableOpacity onPress={mudarTelaMenu}>
            <Image
            style={styles.imagem_barrinhas}
            source={require('/imagem_2024-03-01_121240459.png')}   
            />
          </TouchableOpacity>

          <Text style={styles.texto_cabecalho}>Gastos Percentuais</Text>

        </View>


        {/*TELA ONDE FICA O CONTEÚDO*/}
        <View style={styles.tela}>

          <View style={styles.label_salario}>
            <Text style={styles.texto_salario}>Salário: R$ {salario}</Text>
          </View>

          <View style={styles.label_graph}>
          </View>

        </View>

      </View>
  )
}
