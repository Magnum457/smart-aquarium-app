import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './Views/Login'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
    })
);

export default Routes;