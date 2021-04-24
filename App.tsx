import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  FasilitasScreen,
  HomeScreen,
  ProfilLulusanScreen,
  StrukturOrganisasiScreen,
  KurikulumScreen,
} from './src/screens';
import {Theme} from './src/assets/styles';

export type RootParamList = {
  Home: {};
  ProfilLulusan: {};
  Fasilitas: {};
  StrukturOrganisasi: {};
  Kurikulum: {};
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
          options={{headerTitle: 'Pejabat dan Staff Prodi'}}
        />
        <Stack.Screen name="Kurikulum" component={KurikulumScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
