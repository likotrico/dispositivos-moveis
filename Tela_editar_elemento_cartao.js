import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';

export default function tela_editar_elemento_cartao({route, navigation}) {
  
  console.log('tela_editar_elemento_cartao')
  var vector = route.params.vector
  var salario = route.params.salario
  var elemento = route.params.elemento

  const mudarTelaCartoes = () => {navigation.navigate("Tela_cartoes", ({vector, salario}))}
  const mudarEditandoCartao = () => {navigation.navigate("Tela_editando_cartao", ({vector, salario, elemento}))}
  
  return (
      <View style={styles.container}>
        <View style={styles.linha_superior}></View>

        {/*TELA DO TOPO*/}
        <View style={styles.cabecalho}>
          <TouchableOpacity onPress={mudarTelaCartoes}>
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

            <View style={styles.label_valorPago}>
                <Text style={styles.texto_label_valorpago}>Valor da Compra:</Text>
                <Text style={styles.texto_restante}>{elemento.valor_conta}</Text>
            </View>
            
            <View style={styles.label_valorPago}>
                <Text style={styles.texto_label_valorpago}>Parcelas:</Text>
                <Text style={styles.texto_restante}>{elemento.parcelas}</Text>
            </View>

            <View style={styles.label_valorPago}>
                <Text style={styles.texto_label_valorpago}>Data da compra:</Text>
                <Text style={styles.texto_restante}>{elemento.dia_compra}/{elemento.mes_compra}/{elemento.ano_compra}</Text>
            </View>

            <View style={styles.label_valorPago}>
                <Text style={styles.texto_label_valorpago}>Modalidade:</Text>
                <Text style={styles.texto_restante}>{elemento.modalidade}</Text>
            </View>

            <View style={styles.label_valorPago}>
                <Text style={styles.texto_label_valorpago}>Cartão:</Text>
                <Text style={styles.texto_restante}>{elemento.apelido_cartao}</Text>
            </View>

            <View style={styles.label_comentario_compra}>
                <Text style={styles.texto_label_valorpago}>Comentário:</Text>
                <ScrollView>
                    <Text style={styles.textinputcomentario}>{elemento.comentario}</Text>
                </ScrollView>
            </View>

            <TouchableOpacity style={styles.botao} onPress={mudarEditandoCartao}>
              <Text style={styles.texto_botao}>Editar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botao} onPress={()=>{vector.excluir_elemento_cartao(elemento.id); mudarTelaCartoes()}}>
              <Text style={styles.texto_botao}>Excluir</Text>
            </TouchableOpacity>


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
  
    label_valorPago:{
        width:320,
        height:50,
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
  
    texto_botao:{
        fontSize:20,
        color:'white',
        fontWeight: 'bold',
    },
  
    texto_label_valorpago:{
      fontSize: 17,
      width:130,
      backgroundColor: 'pink',
      fontWeight: 'bold',
      textAlign:'center',
    },

    texto_restante:{
        fontSize:17,
        flex:1,
        textAlign:'center',
        fontWeight: 'bold',
    },
  
    textinputcomentario:{
        //marginLeft:10,
        //marginRight:10,
        width:150,
        height:140,
        //borderWidth:2,
        //borderRadius:5,
        //backgroundColor:'white',
        textAlignVertical:'top',
        numberOfLines:15,
      },
  
    //TouchableOpacity


    botao:{
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