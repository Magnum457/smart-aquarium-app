import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Avatar, Title, Paragraph, Button, DefaultTheme, Provider as PaperProvider, Text, Card } from 'react-native-paper';
import Header from '../Components/Header';
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
        <View style={styles.container}>
            <PaperProvider theme={theme} >
                <Header></Header>
                
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

            </PaperProvider>  
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
});

