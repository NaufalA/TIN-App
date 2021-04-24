import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  FasilitasScreen,
  HomeScreen,
  ProfilLulusanScreen,
  StrukturOrganisasiScreen,
} from './src/components';
import {Theme} from './src/styles';

export type RootParamList = {
  Home: {};
  ProfilLulusan: {};
  Fasilitas: {};
  StrukturOrganisasi: {};
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
        <Stack.Screen
          name="ProfilLulusan"
          component={ProfilLulusanScreen}
          options={{headerTitle: 'Profil Lulusan'}}
        />
        <Stack.Screen name="Fasilitas" component={FasilitasScreen} />
        <Stack.Screen
          name="StrukturOrganisasi"
          component={StrukturOrganisasiScreen}
          options={{headerTitle: 'Struktur Organisasi'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
