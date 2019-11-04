import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './View/Login';


export default function App() {
  return (
    <View style={styles.container}>
      <Login></Login>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
