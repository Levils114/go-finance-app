import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';

import AppLoading from 'expo-app-loading';
import {useFonts,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';
import Hooks from './src/hooks';
import Routes from './src/routes/index.routes';
import { useAuth } from './src/hooks/auth';

export default function App() {
  const { loadingUserData } = useAuth();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  return fontsLoaded || loadingUserData ? (
    <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content"/>
        <Hooks>
          <Routes />
        </Hooks>
    </ThemeProvider>
  ) : <AppLoading />
}