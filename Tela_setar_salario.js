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

  label_informar_valor:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'green',
    flexDirection: 'row',
    columnGap:20,
  },

  label_restante:{
    marginTop:15,
    flex: 7.5,
    flexDirection:'column',
    alignItems:'center',
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
  }, 

  texto_informar_valor:{
    fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor:'white',
    width:150,
    //height:40,
    borderRadius:7,
    borderWidth:3,
    borderColor:'blue',
    lineHeight: 40,
  },

  text_input_salario:{
    alignSelf:'center',
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:2,
    borderRadius:7,
    width:150,
    height:35,
    textAlignVertical:'center',
    textAlign:'center',
  },

  text_button:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
  },

  //BOTÃO
  button_settings:{
    backgroundColor: 'blue',
    alignItems:'center',
    justifyContent:'center',
    width:60,
    height:60,
    borderColor:'black',
    borderWidth:2,
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

export default function tela_setar_salario({route, navigation}) {
  
  //const [salario, setSalario] = useState('')

  var vector = route.params.vector
  var salario = route.params.salario

  const mudarTelaMenu = () => {navigation.navigate("Tela_menu")}
  const salvarNovoSalario = () => {var variavel_salario = salario;navigation.navigate({name: 'Tela_menu', params:{salario: variavel_salario, vector: vector} })}

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

          <Text style={styles.texto_cabecalho}>Setar Salário</Text>

        </View>

        {/*TELA ONDE FICA O CONTEÚDO*/}
        <View style={styles.tela}>

          <View style={styles.label_informar_valor}>
            <Text style={styles.texto_informar_valor}>Digite seu salário:</Text>
            <TextInput 
              style={styles.text_input_salario}
              inputMode='numeric'
              keyboardType='numeric'
              onChange={(newText)=>salario = newText.target.value}
            />
          </View>

          <View style={styles.label_restante}>

            <TouchableOpacity style={styles.button_settings} onPress={salvarNovoSalario}>
              <Text style={styles.text_button}>Salvar</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
  )
}
