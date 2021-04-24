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
import {Image, View, Text} from 'react-native';
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

  const headerLogo = (props?: {text: string}) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <Image
        style={{height: 40, width: 40}}
        source={require('./src/assets/image/logo-tin.png')}
      />
      <Text style={{color: 'white', fontSize: 24, marginHorizontal: 10}}>
        {props?.text ? props?.text : 'TIN Unpad'}
      </Text>
    </View>
  );
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#396873',
          },
          headerTintColor: '#ffffff',
          headerTitleAlign: 'left',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => headerLogo(),
          }}
        />
        <Stack.Screen
          name="ProfilLulusan"
          component={ProfilLulusanScreen}
          options={{
            headerTitle: () => headerLogo({text: 'Profil Lulusan'}),
          }}
        />
        <Stack.Screen
          name="Fasilitas"
          component={FasilitasScreen}
          options={{
            headerTitle: () => headerLogo({text: 'Fasilitas'}),
          }}
        />
        <Stack.Screen
          name="StrukturOrganisasi"
          component={StrukturOrganisasiScreen}
          options={{
            headerTitle: () => headerLogo({text: 'Staff dan Pejabat Prodi'}),
          }}
        />
        <Stack.Screen
          name="Kurikulum"
          component={KurikulumScreen}
          options={{
            headerTitle: () => headerLogo({text: 'Kurikulum'}),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
