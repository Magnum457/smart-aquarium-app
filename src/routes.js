import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './Views/Login'
import Inicio from './Views/Inicio'
import Test from './Views/Test'

const Routes = createAppContainer(
    createSwitchNavigator({
        //Login,
        //Inicio,
        Test,
    })
);

export default Routes;