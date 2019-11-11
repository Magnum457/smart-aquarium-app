import * as React from 'react';
import { StyleSheet, View, Dimensions, Image, AsyncStorage } from 'react-native';
import { DefaultTheme, Button, Provider as PaperProvider} from 'react-native-paper';

import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";

import init from 'react_native_mqtt';

import logo from '../assets/Logo.png'
import Header from '../Components/Header';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#019DDE',
  },
};

const host = 'link-do-host-aws.com';
const port = 8000;
user = 'app';


init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});


export default function Apres() {

    const client = new Paho.MQTT.Client(host, port, user);

    onMessageArrived = (entry) => {
      console.log("onMessageArrived:"+entry);
      console.log(entry.payloadString);
      myJSON = JSON.parse(entry.payloadString)
      console.log(myJSON["teste"])
    }

    onConnectionLost = (err) => {
      console.log('Connection lost!')
      console.log(err)
    }

    onConnect = () => {
      console.log("Connected!!!!");
      client.subscribe('hello/world');
    };

    sendMessage = (message) => {
      message = new Paho.MQTT.Message(message);
      message.destinationName = "hello/world";
      client.send(message);

    //   if(this.state.isConnected){
    //     this.state.client.send(message);    
    //   }else{
    //     this.connect(this.state.client)
    //       .then(() => {
    //         this.state.client.send(message);
    //         this.setState({error: '', isConnected: true});
    //       })
    //       .catch((error)=> {
    //         console.log(error);
    //         this.setState({error: error});
    //       });
    // }
    }

    const test = () => {
      console.log('teste')
      // const client = new Paho.MQTT.Client('broker.mqttdashboard.com', 8000, 'clientId-wZxsgaYWvV',);
      client.onMessageArrived = onMessageArrived;
      client.onConnectionLost = onConnectionLost;
      client.connect({ 
        onSuccess: onConnect,
        useSSL: false ,
        userName: 'yourUser',
        password: 'yourPass',
        onFailure: (e) => {console.log("here is the error" , e); }
  
      });
    }

    return (
      <View style={styles.container}>
        
        {test()}

        <Image source={logo} style={{ marginBottom: 40, width: '55%', height: 100 }} resizeMode="contain"/>

        <Button style={{ width: '100%', marginBottom: 40, backgroundColor: '#019DDE' }} icon="lightbulb" mode="contained" onPress={() => {sendMessage('{"teste": "Testando..."}')}}>

        </Button>

        <LineChart
            data={{
              labels: ["", "01:10", "", "01:30", "", "01:50", "", "02:10", "", "02:30"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }
              ]
            }}
            width={(Dimensions.get("window").width)} 
            height={220}
            yAxisLabel={""}
            yAxisSuffix={"cm³"}
            chartConfig={{
              backgroundColor: "red",
              backgroundGradientFrom: "#019DDE",
              backgroundGradientTo: "#019DDE",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#E77902"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />

      </View>  
    );
  
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});