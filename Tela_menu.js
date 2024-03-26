import { Text, View, TextInput, Button, Alert, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { MMKV } from 'react-native-mmkv';

import Conta1 from "./test2.js"
import Gastos from "./test3.js"
import Conta_pix from './Conta_pix.js';
import Conta_dinheiro from './Conta_dinheiro.js';


const Separator = () => <View style={styles.separator} />;

export default function tela_menu({route, navigation}) {

  //TESTE MMVK
  const storage = new MMKV()
  
  var vector = new Gastos();
  var salario
  //console.log('salario:'+salario)
  //console.log(vector)

  const mudarTelaGastosPercentuais = () => {navigation.navigate("Tela_gastos_percentuais", {vector, salario})}
  const mudarTelaGastos = () => {navigation.navigate("Tela_gastos", {vector, salario})}
  const mudarTelaaReceber = () => {navigation.navigate("Tela_aReceber", {vector, salario})}
  const mudarSetarSalario = () => {navigation.navigate("Tela_setar_salario", {vector, salario})}

  const salvarLocal = () => {
    //SALVANDO O SALARIO
    storage.clearAll()
    storage.set('salario', salario)
  

    //SALVANDO O TAMANHO DOS VETORES
    var qtd_vetor_cartao = vector.vetor_cartao.length
    //console.log('tam vetor_cartao:'+qtd_vetor_cartao)
    storage.set('qtd_vetor_cartao', (qtd_vetor_cartao))

    var qtd_vetor_pix = vector.vetor_pix.length
    //console.log('tam vetor_pix:'+qtd_vetor_pix)
    storage.set('qtd_vetor_pix', qtd_vetor_pix)

    var qtd_vetor_dinheiro = vector.vetor_dinheiro.length
    //console.log('tam vetor_dinheiro:'+qtd_vetor_dinheiro)
    storage.set('qtd_vetor_dinheiro', qtd_vetor_dinheiro)

    //SALVANDO O VETOR DE CARTOES
    var i
    for(i = 0; i < vector.vetor_cartao.length; i++){
      var name = 'vetor_cartao'+i
      //console.log(name)
      //console.log(vector.vetor_cartao[i])
      storage.set(name, JSON.stringify(vector.vetor_cartao[i]))
    }

    //SALVANDO O VETOR DE PIX
    for(i = 0; i < vector.vetor_pix.length; i++){
      var name = 'vetor_pix'+i
      //console.log(name)
      //console.log(vector.vetor_pix[i])
      storage.set(name, JSON.stringify(vector.vetor_pix[i]))
    }

    //SALVANDO O VETOR DE CARTOES
    for(i = 0; i < vector.vetor_dinheiro.length; i++){
      var name = 'vetor_dinheiro'+i
      //console.log(name)
      //console.log(vector.vetor_dinheiro[i])
      storage.set(name, JSON.stringify(vector.vetor_dinheiro[i]))
    }
  }

  const verificar = () => {
    console.log('verificar')
    //CARREGANDO SALARIO
    if(storage.contains('salario')) salario = storage.getNumber('salario')
    else salario = 0
    
    var i, name, elemento, conta1aux, conta_dinheiroaux, conta_pixaux

    //CARREGANDO VETOR CARTAO
    var qtd_vetor_cartao = storage.getNumber('qtd_vetor_cartao')
    for(i = 0; i < qtd_vetor_cartao; i++){
      name = 'vetor_cartao'+i
      console.log(name)
      elemento = JSON.parse(storage.getString(name))
      console.log(elemento)
      conta1aux = new Conta1(elemento.valor_conta, elemento.parcelas, elemento.dia_compra, elemento.mes_compra, elemento.ano_compra, elemento.apelido_cartao, elemento.modalidade, elemento.comentario)
      vector.registrar_gasto_cartao(conta1aux)
      conta1aux = null
    }

    //CARREGANDO VETOR PIX
    var qtd_vetor_pix = storage.getNumber('qtd_vetor_pix')
    for(i = 0; i < qtd_vetor_pix; i++){
      name = 'vetor_pix'+i
      console.log(name)
      elemento = JSON.parse(storage.getString(name))
      console.log(elemento)
      conta_pixaux = new Conta_pix(elemento.valor_trans, elemento.destinatario, elemento.dia_trans, elemento.mes_trans, elemento.ano_trans, elemento.modalidade, elemento.comentario)
      vector.registrar_gasto_pix(conta_pixaux)
      conta_pixaux = null
    }
    
    var qtd_vetor_dinheiro = storage.getNumber('qtd_vetor_dinheiro')
    for(i = 0; i < qtd_vetor_dinheiro; i++){
      name = 'vetor_dinheiro'+i
      console.log(name)
      elemento = JSON.parse(storage.getString(name))
      console.log(elemento)
      conta_dinheiroaux = new Conta_dinheiro(elemento.valorPago, elemento.dia, elemento.mes, elemento.ano, elemento.modalidade, elemento.comentario)
      vector.registrar_gasto_dinheiro(conta_dinheiroaux)
      conta_dinheiroaux = null
    }
  }

  if(route.params == null) {verificar()}
  else {salario = route.params.salario; vector = route.params.vector}

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
            <TouchableOpacity style={styles.touchableOpacity_style1} onPress={salvarLocal}>
              <Text style={styles.texto_botoes}>Predição</Text>
            </TouchableOpacity>
            <Separator/>
            <TouchableOpacity style={styles.touchableOpacity_style1} onPress={mudarTelaGastos}>
              <Text style={styles.texto_botoes}>Gastos</Text>
            </TouchableOpacity>
            <Separator/>
            <TouchableOpacity style={styles.touchableOpacity_style1} onPress={verificar}>
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