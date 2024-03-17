import {useState} from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function tela_editar_elemento_dinheiro({route, navigation}) {
  
  console.log('tela_editar_elemento_dinheiro')
  var vector = route.params.vector
  console.log(vector)
  var salario = route.params.salario
  console.log(salario)
  var elemento = route.params.elemento
  console.log(elemento)

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

          <Text style={styles.texto_cabecalho}>Editar Elemento</Text>

        </View>

        {/*TELA ONDE FICA O CONTEÚDO*/}
        <View style={styles.tela}>

          <View style={styles.label_restante}>

            <View style={styles.label_valorPago}>
                <Text style={styles.texto_label_valorpago}>Valor Pago:</Text>
                <Text style={styles.texto_restante}>{elemento.valorPago}</Text>
            </View>
            
            <View style={styles.label_valorPago}>
                <Text style={styles.texto_label_valorpago}>Data:</Text>
                <Text style={styles.texto_restante}>{elemento.dia}/{elemento.mes}/{elemento.ano}</Text>
            </View>

            <View style={styles.label_valorPago}>
                <Text style={styles.texto_label_valorpago}>Modalidade:</Text>
                <Text style={styles.texto_restante}>{elemento.modalidade}</Text>
            </View>

            <View style={styles.label_valorPago}>
                <Text style={styles.texto_label_valorpago}>Comentário:</Text>
                <Text style={styles.texto_restante}>{elemento.comentario}</Text>
            </View>

            <TouchableOpacity style={styles.botao}>
              <Text style={styles.texto_botao}>Editar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botao} onPress={()=>{vector.excluir_elemento_dinheiro(elemento.id);mudarTelaDinheiro()}}>
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
        height:40,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'orange',
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
  
  
    texto_comentario:{
      fontSize:10,
    },
  
    //TouchableOpacity
    botao1:{
      width:300,
      height:45,
      paddingLeft:5,
      paddingRight:5,
      borderWidth:5,
      borderRadius:10,
      borderColor:'red',
      backgroundColor:'white',
      flexDirection:'row',
      columnGap: 5,
      alignItems:'center',
    },

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
  
    imagem_botao:{
      borderRadius:5,
      width:25,
      height:25,
    },
  
  });