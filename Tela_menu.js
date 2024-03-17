import { Text, View, TextInput, Button, Alert, StyleSheet, Image, TouchableOpacity, } from 'react-native';

import Conta1 from "./test2.js"
import Gastos from "./test3.js"


const Separator = () => <View style={styles.separator} />;

export default function tela_menu({route, navigation}) {

  //var ola = new Conta1(12345.67, 12, 1, 2, 2024, 'cartao liko', 0, 'comentario1')

  var test = new Conta1(12345.67, 12, 1, 2, 2024, 'cartao liko', 0, 'comentario1')
  var test1 = new Conta1(1.67, 8, 1, 2, 2022, 'cartao liko', 0, 'alo')
  var vector = new Gastos();
  
  //vector.registrar_gasto_cartao(test)
  //vector.registrar_gasto_cartao(test1)
  //vector.registrar_gasto_cartao(test)

  var salario
  if(route.params == null) {console.log('ok salario'); salario = 0}
  else {/*console.log('else')*/salario = route.params.salario}

  if(route.params == null) {console.log('ok salario'); salario = 0}
  else {/*console.log('else')*/salario = route.params.salario; vector = route.params.vector}

  console.log('salario:'+salario)
  console.log(vector)

  const mudarTelaGastosPercentuais = () => {navigation.navigate("Tela_gastos_percentuais", {vector, salario})}
  const mudarTelaGastos = () => {navigation.navigate("Tela_gastos", {vector, salario})}
  const mudarTelaaReceber = () => {navigation.navigate("Tela_aReceber", {vector, salario})}
  const mudarSetarSalario = () => {navigation.navigate("Tela_setar_salario", {vector, salario})}
  //const mudarTelaGastosPercentuais = () => {}

  return (
      <View style={styles.container}>
        <View style={styles.container}>
          
          <View style={styles.linha_superior}></View>
          
          <View style={styles.cabecalho}>
            <Text style={styles.texto_menu}>MENU</Text>
          </View>

          <View style={styles.menu}>
            <Separator/>
            <TouchableOpacity style={styles.touchableOpacity_style1} onPress={mudarTelaGastosPercentuais}>
              <Text style={styles.texto_botoes}>Gastos Percentuais</Text>
            </TouchableOpacity>
            <Separator/>
            <TouchableOpacity style={styles.touchableOpacity_style1}>
              <Text style={styles.texto_botoes}>Predição</Text>
            </TouchableOpacity>
            <Separator/>
            <TouchableOpacity style={styles.touchableOpacity_style1} onPress={mudarTelaGastos}>
              <Text style={styles.texto_botoes}>Gastos</Text>
            </TouchableOpacity>
            <Separator/>
            <TouchableOpacity style={styles.touchableOpacity_style1} onPress={mudarTelaaReceber} >
              <Text style={styles.texto_botoes}>Agiotagem</Text>
            </TouchableOpacity>
            <Separator/>
            <TouchableOpacity style={styles.touchableOpacity_style1} onPress={mudarSetarSalario}>
              <Text style={styles.texto_botoes}>Setar Salário</Text>
            </TouchableOpacity>
            <Separator/>
            
          </View>

        </View>
      
      </View>
      
      
  )
}


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
    backgroundColor:'yellow',
    alignItems:'center',
    justifyContent:'center',
  },

  menu:{
    flex: 87,
    backgroundColor:'white',
  },

  //TouchableOpacity styles
  touchableOpacity_style1:{
    backgroundColor:'gray',
    alignItems:'center',
    justifyContent:'center',
    height:40,
  },

  //TEXT STYLES
  texto_menu:{
    fontSize: 40,
    fontWeight: 'bold',
  },

  texto_botoes:{
    fontSize: 20,
  }, 

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

});