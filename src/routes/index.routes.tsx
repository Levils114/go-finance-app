import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import theme from '../global/styles/theme';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { useAuth } from '../hooks/auth';

export default function Routes(){
   const { user } = useAuth();

   return(
      <NavigationContainer>
         {!!user.name ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
   );
}