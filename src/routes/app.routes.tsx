import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Register from '../screens/Register';
import Resume from '../screens/Resume';

import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';


const { Navigator, Screen } = createBottomTabNavigator();

export default function AppRoutes(){
   const theme = useTheme();

   return(
      <Navigator 
         initialRouteName="Listagem" 
         screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.colors.secondary,
            tabBarInactiveTintColor: theme.colors.text,
            tabBarLabelPosition: 'beside-icon',
            tabBarStyle: {
               paddingVertical: Platform.OS === 'ios' ? 24 : 0,
               marginBottom: Platform.OS === 'ios' ? 12 : 0,
               height: 88,
            }
         }}
      >
         <Screen options={{
            tabBarIcon: ({ size, color }) => (
               <MaterialIcons name="format-list-bulleted" size={size} color={color}/>
            )
         }} name="Listagem" component={Dashboard}/>
         <Screen options={{
            tabBarIcon: ({ size, color }) => (
               <MaterialIcons name="attach-money" size={size} color={color}/>
            )
         }} name="Cadastrar" component={Register}/>
         <Screen options={{
            tabBarIcon: ({ size, color }) => (
               <MaterialIcons name="pie-chart" size={size} color={color}/>
            )
         }} name="Resumo" component={Resume}/>
      </Navigator>
   );
}