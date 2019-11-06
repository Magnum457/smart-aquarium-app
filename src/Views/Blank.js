import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { TextInput, Button, DefaultTheme, Provider as PaperProvider, Text} from 'react-native-paper';
import logo from '../assets/Logo.png'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#019DDE',
    accent: 'red',
  },
};

export default class Inicio extends React.Component {

  render(){
    return (
      <PaperProvider theme={theme} >
        <View style={styles.container}>
          
          

        </View>  
      </PaperProvider>  
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

