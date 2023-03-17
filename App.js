import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
// import { StackNavigator } from './StackNavigator';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./screens/Main";

export default function App() {
  return (
    <SafeAreaProvider>
      <Main />
      {/* <NavigationContainer>
        <StackNavigator />
      </NavigationContainer> */}
    </SafeAreaProvider>
  );
}
