import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Register from '../screens/Register';

const { Navigator, Screen } = createBottomTabNavigator();

export default function AppRoutes(){
   return(
      <Navigator initialRouteName="Listagem" screenOptions={{
         headerShown: false
      }}>
         <Screen name="Listagem" component={Dashboard}/>
         <Screen name="Cadastrar" component={Register}/>
      </Navigator>
   );
}