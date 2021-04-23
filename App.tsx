import 'react-native-gesture-handler';
import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, ProfilLulusanScreen} from './src/components';
import {Theme} from './src/styles';

export type RootParamList = {
  Home: {paramA?: string};
  'Profil Lulusan': {paramA?: string};
};

const App = () => {
  const Stack = createStackNavigator<RootParamList>();

  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#396873',
          },
          headerTintColor: '#ffffff',
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Profil Lulusan" component={ProfilLulusanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
