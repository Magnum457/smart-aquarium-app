import * as React from 'react';
import { StyleSheet, Image, View, ScrollView, AsyncStorage } from 'react-native';
import { Avatar, Title, Paragraph, Button, DefaultTheme, Provider as PaperProvider, Text, Card, TextInput } from 'react-native-paper';
import Header from '../Components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons'
import logo from '../assets/Logo.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { black } from 'ansi-colors';
import init from 'react_native_mqtt';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#019DDE',
  },
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const host = '44.227.11.98';
const port = 9001;
user = 'app';

init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});

export default class Inicio extends React.Component {
  state = {
    addCard: false,
    conexao: false,
    aquario: '',
    loading: false,
    conected: false
  }

  handleAddCard = () => {
    this.setState({ addCard: true })
  }

  closeAddCard = () => {
    this.setState({ addCard: false })
  }

  handleConnect = async (aquario) => {
    const client = new Paho.MQTT.Client(host, port, user);

    // callback da msg
    onMessageArrived = (entry) => {
      console.log(entry.payloadString);

    }

    // callback de erro de conexão
    onConnectionLost = (err) => {
      console.log('Connection lost')
      console.log(err)
    }

    // callback de conexao
    onConnect = async() => {
      console.log("Connectado")
      client.subscribe(aquario + "/conexao")
      this.setState({conected: true})
    }

    // publisher
    sendMessage = (message) => {
      message = new Paho.MQTT.Message(message)
      message.destinationName = aquario + "/conexao"
      client.send(message)
    }

    // instancia da conexao
    while(this.state.conected === false) {
      client.onMessageArrived = onMessageArrived
      client.onConnectionLost = onConnectionLost
      client.connect({
        onSuccess: onConnect,
        useSSL: false,
        userName: '',
        password: '',
        onFailure: (e) => (console.log("Erro ", e))
      })
      this.setState({loading: true})
      await sleep(10000)
      this.setState({loading: false})
      break
    }

    if (this.state.conected === true) {
      this.setState({
        addCard: false,
        conexao: false,
        aquario: '',
        loading: false,
        conected: false
      })
      this.props.navigation.navigate('Apres')
    } else {
      console.log('erro de conexao')
      this.setState({
        addCard: false,
        conexao: false,
        aquario: '',
        loading: false,
        conected: false
      })
    }
    
  }

  render(){
    return (
        <View style={styles.container}>
          
            <PaperProvider theme={theme} >
            
                <Header></Header>
                <ScrollView>    
                <Card style={{ marginTop: 120 }}>
                    <Card.Title title="Aquário 01"/>
                    
                    <Card.Cover source={{ uri: 'https://i1.wp.com/www.antenacritica.com.br/wp-content/uploads/2019/09/aquario-1.jpg?resize=600%2C400&ssl=1' }} />
                    <Card.Actions>
                        <Button icon="camera"></Button>
                        <Button icon="thermometer"></Button>
                        <Button icon="cogs"></Button>
                    </Card.Actions>
                </Card>

                <Card style={{ marginTop: 20 }}>
                    <Card.Title title="Aquário 02"/>
                    
                    <Card.Cover source={{ uri: 'https://images.tcdn.com.br/img/img_prod/621097/casa_do_bob_esponja_enfeite_para_aquario_3399068_6_20180315220715.jpg' }} />
                    <Card.Actions>
                        <Button icon="cogs"></Button>
                        <Button icon="lightbulb"></Button>
                    </Card.Actions>
                </Card>
              </ScrollView>
            </PaperProvider>
          
            {/* botão para adicionar um card */}
                <View style={styles.addButton}>
                        <TouchableOpacity onPress={() => this.handleAddCard()}>
                            <Icon name="add" size={30} />
                        </TouchableOpacity>
                </View>
            {/* Alertpra conectar com um aquario */}
            { this.state.addCard &&  
            <View style={styles.addCardContainer}>
              <View style={styles.addCardView}>
                <View style={styles.addCardHeader}>
                  <Text style={styles.addCardLabel}>Digite o código do aquario</Text>
                </View>
                
                <TextInput 
                  style={styles.addCardInput}
                  mode='outlined'
                  value={this.state.aquario}
                  onChangeText={text => this.setState({ aquario: text })}
                />

                <View style={styles.btnView}>
                  <TouchableOpacity onPress={() => this.handleConnect(this.state.aquario)} style={styles.btnAddCard}>
                    <Text>Conectar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.closeAddCard()} style={styles.btnCancelCard}>
                    <Text>Cancelar</Text>
                  </TouchableOpacity>
                </View>
                
              </View>
            </View>
            }
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
  },
  addButton: {
    position: 'absolute',
    top: '90%',
    left: '80%',
    zIndex: 2,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#019DDE',
    borderRadius: 25
  },
  addCardContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addCardView: {
    flexDirection: 'column',
    width: '60%',
    backgroundColor: '#fff',
    alignSelf: 'auto',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5
  },
  addCardHeader: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  addCardLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#019DDE'
  },
  addCardInput: {
    backgroundColor: '#fff',
    height: 30,
    padding: 10,
    alignSelf: 'stretch',
    borderColor: '#333',
    marginBottom: 5
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'space-around'
  },
  btnAddCard: {
    backgroundColor: '#30a930',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 5,
    marginRight: 5
  },
  btnCancelCard: {
    backgroundColor: '#ad3035',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 5,
    marginLeft: 5
  }
});

