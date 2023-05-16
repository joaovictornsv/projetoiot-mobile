import * as React from 'react';
import Routes from './src/screens/routes';
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from "native-base";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
      <NativeBaseProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </GestureHandlerRootView>
      </NativeBaseProvider>
  );
}
