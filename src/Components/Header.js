import * as React from 'react';
import { Appbar, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#019DDE',
      accent: 'red',
    },
  };

export default class Header extends React.Component {
  _openMenu = () => console.log('Open Menu');


  _handleMore = () => console.log('Shown more');

  render() {
    return (
    <PaperProvider theme={theme} >
      <Appbar.Header>
        <Appbar.Action icon="menu"
          onPress={this._openMenu}
        />
        <Appbar.Content
         title="Início"
        />
        <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
      </Appbar.Header>
    </PaperProvider>
    );
  }
}