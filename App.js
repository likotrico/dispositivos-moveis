import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';


import tela_gastos_percentuais from './Tela_gastos_percentuais';
import tela_menu from './Tela_menu.js';
import tela_gastos from './Tela_gastos.js'
import tela_aReceber from './tela_aReceber.js'
import tela_setar_salario from './Tela_setar_salario.js'
import tela_gastos_cartao from './Tela_cartoes.js'
import tela_inserir_elemento_cartao from './Tela_inserir_elemento_cartao.js'
import tela_pix from './Tela_pix.js'
import tela_inserir_elemento_pix from './Tela_inserir_elemento_pix.js';
import tela_gastos_dinheiro from './Tela_dinheiro.js';
import tela_inserir_elemento_dinheiro from './Tela_inserir_elemento_dinheiro.js';
import tela_editar_elemento_dinheiro from './Tela_editar_elemento_dinheiro.js';
import tela_editando_dinheiro from './Tela_editando_dinheiro.js';
import tela_editar_elemento_cartao from './Tela_editar_elemento_cartao.js';
import tela_editando_cartao from './Tela_editando_cartao.js';
import tela_editar_elemento_pix from './Tela_editar_elemento_pix.js';
import tela_editando_pix from './Tela_editando_pix.js';

const Stack = createNativeStackNavigator();

export default function App(){

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tela_menu" component={tela_menu}/>
          <Stack.Screen name="Tela_gastos_percentuais" component={tela_gastos_percentuais}/>
          <Stack.Screen name="Tela_gastos" component={tela_gastos}/>
          <Stack.Screen name="Tela_aReceber" component={tela_aReceber}/>
          <Stack.Screen name="Tela_setar_salario" component={tela_setar_salario}/>
          <Stack.Screen name="Tela_cartoes" component={tela_gastos_cartao}/>
          <Stack.Screen name="Tela_inserir_elemento_cartao" component={tela_inserir_elemento_cartao}/>
          <Stack.Screen name="Tela_pix" component={tela_pix}/>
          <Stack.Screen name="Tela_inserir_elemento_pix" component={tela_inserir_elemento_pix}/>
          <Stack.Screen name="Tela_dinheiro" component={tela_gastos_dinheiro}/>
          <Stack.Screen name="Tela_inserir_elemento_dinheiro" component={tela_inserir_elemento_dinheiro}/>
          <Stack.Screen name="Tela_editar_elemento_dinheiro" component={tela_editar_elemento_dinheiro}/>
          <Stack.Screen name="Tela_editando_dinheiro" component={tela_editando_dinheiro}/>
          <Stack.Screen name="Tela_editar_elemento_cartao" component={tela_editar_elemento_cartao}/>
          <Stack.Screen name="Tela_editando_cartao" component={tela_editando_cartao}/>
          <Stack.Screen name="Tela_editar_elemento_pix" component={tela_editar_elemento_pix}/>
          <Stack.Screen name="Tela_editando_pix" component={tela_editando_pix}/>
        </Stack.Navigator>
      
    </NavigationContainer>

  );
}