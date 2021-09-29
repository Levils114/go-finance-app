import 'react-native-gesture-handler';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import AppLoading from 'expo-app-loading';
import {useFonts,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';
import AppRoutes from './src/routes/app.routes';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import SignIn from './src/screens/SignIn';
import Hooks from './src/hooks';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  return fontsLoaded ? (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content"/>
        <Hooks>
          <SignIn />
        </Hooks>
      </NavigationContainer>
    </ThemeProvider>
  ) : <AppLoading />
}