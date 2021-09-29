import React from 'react';
import { View, Text } from 'react-native';
import CountDown from './src/pages/CountDown';
import Home from './src/pages/Home';
import Instagram from './src/pages/Instagram';
import Practicing from './src/pages/Practicing';
import Registration from './src/pages/Registration';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FortuneCookie from './src/pages/FortuneCookie';
import Animation from './src/pages/Animation';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Instagram: undefined;
      CountDown: undefined;
      FortuneCookie: undefined;
      Practicing: undefined;
      Registration: undefined;
      Animation:undefined;
    }
  }
}

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="FortuneCookie" component={FortuneCookie}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CountDown" component={CountDown}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Instagram" component={Instagram}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Practicing" component={Practicing}
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Registration" component={Registration}
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Animation" component={Animation}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
