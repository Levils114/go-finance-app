import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';

export default function AuthRoutes(){
   const { Navigator, Screen } = createNativeStackNavigator();

   return(
      <Navigator 
         initialRouteName="SignIn" 
         screenOptions={{
            headerShown: false,
         }}
      >
         <Screen name="SignIn" component={SignIn} /> 
      </Navigator>
   );
}