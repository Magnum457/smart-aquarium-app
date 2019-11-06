import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import color from 'color';

import Header from '../Components/Header';

import Navegacao from '../Components/Navegacao';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#019DDE',
  },
};


const theme2 = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#E77902',    
    surface: '#ffffff',
    error: '#B00020',
    onBackground: '#ffffff',
    onSurface: '#ffffff',
    disabled: color('#ffffff')
      .alpha(0.26)
      .rgb()
      .string(),
    placeholder: color('#ffffff')
      .alpha(0.54)
      .rgb()
      .string(),
    backdrop: color('#ffffff')
      .alpha(0.5)
      .rgb()
      .string(),
  },
};

export default class Inicio extends React.Component {

  render(){
    return (
      <View style={styles.container}>
      <PaperProvider theme={theme} >
          <Header></Header>
      </PaperProvider>
      <PaperProvider theme={theme2} >
          <Navegacao></Navegacao>


      </PaperProvider>  
        </View>  
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

