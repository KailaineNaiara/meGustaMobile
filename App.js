import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  DataTable,
  FlatList,
  StatusBar,
  Box,
} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import sobre from './assets/EvenCluelessHornet-max-1mb.gif';
import logo from './assets/ME-GUSTA.gif';
import logo1 from './assets/lanche1.jpg';
import logo2 from './assets/lanche2.jpg';
import logo3 from './assets/lanche3.jpg';
import logo4 from './assets/lanche4.jpg';
import logo5 from './assets/lanche5.jpg';
import logo6 from './assets/lanche6.jpg';
import logo7 from './assets/lanche7.jpg';
import logo8 from './assets/lanche8.jpg';
import logo9 from './assets/lanche9.jpg';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

//Páginas do app
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          source={logo}
          style={{ marginLeft: 40, marginTop: 40, width: 320, height: 390 }}
        />

        <Text>{'/n'}</Text>
        <Text>{'/n'}</Text>
        <Text>{'/n'}</Text>
        <Text>{'/n'}</Text>
        <Text>{'/n'}</Text>
        <Text>{'/n'}</Text>
      </View>
      <Text style={styles.paragraph}>BEM-VINDO</Text>

      <View style={styles.buttons}>
        <View style={styles.letras}>
          <Button
            color="black"
            title="Cardapio"
            fontFamily="Arial, Helvetica, sans-serif"
            onPress={() => navigation.navigate('cardapio')}
          />
        </View>

        <Text></Text>

        <View style={styles.letras}>
          <Button
            color="black"
            title="Fazer Pedido"
            onPress={() => navigation.navigate('pedido')}
          />
        </View>

        <Text></Text>

        <View style={styles.letras}>
          <Button
            color="black"
            title="Sobre"
            onPress={() => navigation.navigate('sobre')}
          />
        </View>

        <Text></Text>

      </View>
    </View>
  );
}

const Lanche1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.fundo}>
          <Text style={styles.letras}>Selecione Uma Opção</Text>

          <View style={styles.opcoes}>
            <Button
              color="white"
              title="Patros"
              onPress={(lanche1) => navigation.navigate('lanches')}
            />
          </View>
          <View style={styles.opcoes}>
            <Button
              color="white"
              title="Bebidas"
              onPress={(lanche1) => navigation.navigate('bebidas')}
            />
          </View>
          <View style={styles.opcoes}>
            <Button
              color="white"
              title="Sobremesas"
              onPress={(lanche1) => navigation.navigate('porcoes')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// CARDAPIO
const Lanches = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.letras}>
            <Button
              color="black"
              title="Fazer Pedido"
              onPress={() => navigation.navigate('pedido')}
            />
          </View>
          <Text> {'\n'}</Text>
          <Text> {'\n'}</Text>
          <View style={styles.box}>
            <Text style={styles.buttonlanche}>Guacamole</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./assets/lanche1.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonlanche}>
              <Button color="white" title="Pedir" />
            </View>
          </View>
          <Text> {'\n'}</Text>
          <View style={styles.box}>
            <Text style={styles.buttonlanche}>Tortilhas</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./assets/lanche2.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonlanche}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>

          <View style={styles.box}>
            <Text style={styles.buttonlanche}>Chilli</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./assets/lanche3.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonlanche}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>

          <View style={styles.box}>
            <Text style={styles.buttonlanche}>Burrito</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./assets/lanche4.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonlanche}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>

          <View style={styles.box}>
            <Text style={styles.buttonlanche}>Nachos</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./assets/lanche5.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonlanche}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>

          <View style={styles.box}>
            <Text style={styles.buttonlanche}>Pozole</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./assets/lanche6.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonlanche}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>

          <View style={styles.box}>
            <Text style={styles.buttonlanche}>Tacos</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./assets/lanche7.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonlanche}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>

          <View style={styles.box}>
            <Text style={styles.buttonlanche}>Burritos</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./assets/lanche8.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonlanche}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>

          <View style={styles.box}>
            <Text style={styles.buttonlanche}>Tacos</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./assets/lanche9.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonlanche}>
              <Button color="white" title="Pedir" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Bebidas = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.letras}>
            <Button
              color="black"
              title="Fazer Pedido"
              onPress={() => navigation.navigate('pedido')}
            />
          </View>
          <Text> {'\n'}</Text>
          <Text> {'\n'}</Text>
          <View style={styles.box}>
            <Text style={styles.buttonbebida}>Coquetel</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./bebidas/drink1.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonbebida}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>

          <View style={styles.box}>
            <Text style={styles.buttonbebida}>Suco de Laranja</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./bebidas/drink2.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonbebida}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>

          <View style={styles.box}>
            <Text style={styles.buttonbebida}>Tequila</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./bebidas/drink3.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonbebida}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>

          <View style={styles.box}>
            <Text style={styles.buttonbebida}>Drink</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./bebidas/drink4.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonbebida}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>

          <View style={styles.box}>
            <Text style={styles.buttonbebida}>Cerveja</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./bebidas/drink5.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonbebida}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>

          <View style={styles.box}>
            <Text style={styles.buttonbebida}>Pinga </Text>
            <Image
              style={styles.tinyLogo}
              source={require('./bebidas/drink6.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonbebida}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>
          <View style={styles.box}>
            <Text style={styles.buttonbebida}>Coca cola</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./bebidas/drink7.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonbebida}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>

          <View style={styles.box}>
            <Text style={styles.buttonbebida}>Vinho</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./bebidas/drink8.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonbebida}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Porcoes = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.letras}>
            <Button
              color="black"
              title="Fazer Pedido"
              onPress={() => navigation.navigate('pedido')}
            />
          </View>
          <Text> {'\n'}</Text>
          <Text> {'\n'}</Text>

          <View style={styles.box}>
            <Text style={styles.buttonbebida}>Doce</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./sobremesas/sobre1.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonporcao}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>
          <View style={styles.box}>
            <Text style={styles.buttonbebida}>Doce</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./sobremesas/sobre2.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonporcao}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>

          <View style={styles.box}>
            <Text style={styles.buttonbebida}>Doce</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./sobremesas/sobre3.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonporcao}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>

          <View style={styles.box}>
            <Text style={styles.buttonbebida}>Doce</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./sobremesas/sobre4.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonporcao}>
              <Button color="white" title="Pedir" />
            </View>
          </View>

          <Text> {'\n'}</Text>

          <View style={styles.box}>
            <Text style={styles.buttonbebida}>Doce</Text>
            <Image
              style={styles.tinyLogo}
              source={require('./sobremesas/sobre5.jpg')}
            />
            <Text> {'\n'}</Text>
            <View style={styles.buttonporcao}>
              <Button color="white" title="Pedir" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// FAZER PEDIDO

const Lanche2 = () => {
  const [text, onChangeText] = React.useState('Fazer seu pedido');

  return (
    <View>
      <Text style={styles.pedido}> Pedidos </Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View style={styles.buttonporcao}>
        <Button color="white" title="Pedir" />
      </View>
    </View>
  );
};

// SOBRE

function Lanche3() {
  return (
    <View style={styles.sobre}>
      <Image source={sobre} style={{ fontSize: 10, width: 200, height: 200, margin:50}} />
      <Text></Text>
      <Text style={styles.text}>
      𝒪𝓈 𝓅𝓇𝒶𝓉𝑜𝓈 𝓉í𝓅𝒾𝒸𝑜𝓈 𝒹𝑜 𝑀é𝓍𝒾𝒸𝑜 𝓈𝓊𝓇𝑔𝒾𝓇𝒶𝓂 𝒶𝓉𝓇𝒶𝓋é𝓈 𝒹𝒶𝓈 𝓅𝓇á𝓉𝒾𝒸𝒶𝓈
      𝒸𝓊𝓁𝓉𝓊𝓇𝒶𝒾𝓈 𝒹𝑜𝓈 𝓅𝑜𝓋𝑜𝓈 𝓅𝓇é-𝒸𝑜𝓁𝑜𝓂𝒷𝒾𝒶𝓃𝑜𝓈, 𝑒𝓂 𝑒𝓈𝓅𝑒𝒸𝒾𝒶𝓁 𝑜𝓈 𝒶𝓈𝓉𝑒𝒸𝒶𝓈,
      𝓆𝓊𝑒 𝓉𝒶𝓂𝒷é𝓂 𝒶𝒹𝓆𝓊𝒾𝓇𝒾𝓇𝒶𝓂, 𝓅𝑜𝓈𝓉𝑒𝓇𝒾𝑜𝓇𝓂𝑒𝓃𝓉𝑒, 𝒸𝑒𝓇𝓉𝑜𝓈 𝒸𝑜𝓈𝓉𝓊𝓂𝑒𝓈 𝒹𝑜𝓈
      𝒸𝑜𝓁𝑜𝓃𝒾𝓏𝒶𝒹𝑜𝓇𝑒𝓈 𝑒𝓈𝓅𝒶𝓃𝒽ó𝒾𝓈, 𝓃𝑜 𝓈é𝒸𝓊𝓁𝑜 𝒳𝒱𝐼, 𝓅𝓇𝒾𝓃𝒸𝒾𝓅𝒶𝓁𝓂𝑒𝓃𝓉𝑒 𝒸𝑜𝓂 𝒶
      𝓊𝓉𝒾𝓁𝒾𝓏𝒶çã𝑜 𝒹𝑒 𝑒𝓈𝓅𝑒𝒸𝒾𝒶𝓇𝒾𝒶𝓈.
      </Text>
    </View>
  );
}

// CONTATO

function Lanche4() {

  
const [text, onChangeText] = React.useState('Observação');

  return (

    <ScrollView>
    <View>
    <View style={styles.buttoncontato}>
        <Button color="black" title="" />
        
      </View>
    <Image source={wpp} style={{marginTop:12,marginLeft:130, fontSize: 2, width: 100, height: 100 }} />
    <Text> {'\n'}</Text>
      <View style={styles.buttoncontato}>
        <Button color="black" title="Entrar em contato" />
        
      </View>

      <Text> {'\n'}</Text>

       <Image source={insta} style={{marginLeft:130, fontSize: 2, width: 100, height: 100 }} />
       <Text> {'\n'}</Text>
      <View style={styles.buttoncontato}>
        <Button color="black" title="Entrar em contato" />
        
      </View>

      <Text> {'\n'}</Text>

       <Image source={tll} style={{marginLeft:130, fontSize: 2, width: 100, height: 100 }} />
       <Text> {'\n'}</Text>
      <View style={styles.buttoncontato}>
        <Button color="black" title="Entrar em contato" />
        
      </View>
     <Text> {'\n'}</Text>
      <Text style={{ textAlign:'center', fontSize:30,}}>Fazer Um Comentario</Text>
       <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text> {'\n'}</Text>
        <Text> {'\n'}</Text>
        <Text> {'\n'}</Text>
        <View style={styles.buttoncontato}>
        <Button color="black" title="" />
        
      </View>
    </View>
</ScrollView>
 
       
     
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'meGusta' }}
        />
        <Stack.Screen
          name="cardapio"
          component={Lanche1}
          options={{ title: 'Cardapio' }}
        />
        <Stack.Screen
          name="pedido"
          component={Lanche2}
          options={{ title: 'Pedido' }}
        />
        <Stack.Screen
          name="sobre"
          component={Lanche3}
          options={{ title: 'Sobre' }}
        />
        <Stack.Screen
          name="contato"
          component={Lanche4}
          options={{ title: 'Contato' }}
        />
        <Stack.Screen
          name="lanches"
          component={Lanches}
          options={{ title: 'lanches' }}
        />
        <Stack.Screen
          name="bebidas"
          component={Bebidas}
          options={{ title: 'bebidas' }}
        />
        <Stack.Screen
          name="porcoes"
          component={Porcoes}
          options={{ title: 'porcoes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'black',
    borderRadius: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    padding: 8,
  },
  container2: {
    marginLeft: -20,
    justifyContent: 'center',
    marginTop: -80,
  },
  fundo: {
    borderRadius: 30,
    backgroundColor: 'black',
    marginTop: 150,
  },

  paragraph: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    color: 'black',
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -100,
  },
  buttons: {
    flex: 2,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    borderRadius: 0,
    padding: 30,
    marginHorizontal: 10,
    marginTop: -60,
    color:'white',
  },

  opcoes: {
    flex: 2,
    backgroundColor: 'black',
    borderRadius: 0,
    marginHorizontal: 120,
    marginVertical: 15,
    padding: 3,
  },

  letras: {
    color: 'white',
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 100,
    textAlign: 'center',
    fontSize: 50,
  },
  buttonporcao: {
    color: 'white',
    fontSize: 50,
    backgroundColor: 'black',
    padding: 6,
    textAlign: 'center',
    borderRadius: 0,
  },

  buttonbebida: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'black',
    padding: 6,
    textAlign: 'center',
    borderRadius: 0,
  },

  buttonlanche: {
    color: 'white',
    fontSize: 50,
    backgroundColor: 'black',
    padding: 6,
    textAlign: 'center',
    borderRadius: 10,
  },

  sobre: {
    //backgroundColor: 'white',
    marginTop: 10,
    justifyContent: 'center',
    marginLeft: 65,
  },
  text: {
    marginTop: 20,
    justifyContent: 'center',
    width: 320,
    fontSize: 22,
    borderRadius: 0,
    textAlign: 'center',

  },

  tinyLogo: {
    width: 230,
    height: 230,
    flexDirection: 'row',
    marginLeft: 75,
  },

  scrollView: {
    marginHorizontal: 20,
  },

  input: {
    height: 200,
    margin: 12,
    borderWidth: 1,
    padding: 30,
    textAlign: 'center',
    marginTop: 50,
    fontSize: 20,
  },

  pedido: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    marginTop: 10,
    justifyContent: 'center',
    fontSize: 20,
    borderRadius: 0,
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'black',
  },

});
