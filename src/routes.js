import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './Views/Login'
import Inicio from './Views/Inicio'
import Test from './Views/Test'
import Apres from './Views/Apres'

const Routes = createAppContainer(
    createSwitchNavigator({
        //Login,
        //Inicio,
        //Test,
        Apres
    })
);

export default Routes;
