import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, TextInput, Button } from 'react-native-paper';

export default class Login extends React.Component {
  state = {
    text: '',
    password: ''
  };

  render(){
    return (
      <View style={styles.container}>
        <Avatar.Icon size={128} icon="fish" />

        <View style={{ height: 20 }}></View>

        <TextInput
          style={{ width: '90%', height: 40}}
          mode='outlined'
          label='Email'
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />    

        <View style={{ height: 20 }}></View>

        <TextInput
          secureTextEntry={true}
          style={{ width: '90%', height: 40}}
          mode='outlined'
          label='Senha'
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        /> 

        <View style={{ height: 20 }}></View>

        <Button icon="login" mode="contained" onPress={() => console.log('Pressed')}>
          entrar
        </Button>
      </View>  
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

