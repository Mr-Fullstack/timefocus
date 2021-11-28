import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import Home from './src/screens/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <StatusBar
          translucent
          style='light'
        />
        {/* <Main /> */}
        <Home />
      </ThemeProvider>
    );
  }
}
