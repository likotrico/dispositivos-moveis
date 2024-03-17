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
    backgroundColor:'gray',
  },

  texto_inserir_novo_elemento:{
    flex:1,
    fontSize:23,
    textAlign:'center',
    backgroundColor:'gray',
  },

  texto_nome:{ //permitir no máximo 15 caracteres
    marginLeft:10,
    fontSize:18,
    backgroundColor:'pink',
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

export default function tela_aReceber({navigation}) {

  const mudarTelaMenu = () => {navigation.navigate("Tela_menu")}

  return (
      <View style={styles.container}>
        <View style={styles.linha_superior}></View>


        {/*TELA DO TOPO*/}
        <View style={styles.cabecalho}>
          <TouchableOpacity onPress={mudarTelaMenu} >
            <Image
            style={styles.imagem_barrinhas}
            source={require('/imagem_2024-03-01_121240459.png')}   
            />
          </TouchableOpacity>

          <Text style={styles.texto_cabecalho}>Dívidas</Text>

        </View>

        {/*TELA ONDE FICA O CONTEÚDO*/}
        <View style={styles.tela}>

          <View style={styles.label_restante}>

            <TouchableOpacity style={styles.botao1}>
              <Image
              style={styles.imagem_botao}
              source={require('/imagem_2024-03-01_121240459.png')}   
              />
              <Text style={styles.texto_inserir_novo_elemento}>Inserir Novo Elemento</Text>
            
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao1}>
              <Image
              style={styles.imagem_botao}
              source={require('/imagem_2024-03-01_121240459.png')}   
              />
              <Text style={styles.texto_botao}>R$: 50,00</Text>
              <Text style={styles.texto_nome}>Fulano 1aaaaa</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.botao1}>
              <Image
              style={styles.imagem_botao}
              source={require('/imagem_2024-03-01_121240459.png')}   
              />
              <Text style={styles.texto_botao}>R$: 20,00</Text>
              <Text style={styles.texto_nome}>Fulano 2</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.botao1}>
              <Image
              style={styles.imagem_botao}
              source={require('/imagem_2024-03-01_121240459.png')}   
              />
              <Text style={styles.texto_botao}>R$: 10,00</Text>
              <Text style={styles.texto_nome}>Fulano</Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>
  )
}
