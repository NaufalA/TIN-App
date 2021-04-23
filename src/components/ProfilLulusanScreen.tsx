import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View, Button} from 'react-native';
import {RootParamList} from '../../App';

type Props = StackScreenProps<RootParamList, 'Profil Lulusan'>;

export const ProfilLulusanScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text> Profil Lulusan </Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home', {})}></Button>
    </View>
  );
};

export default ProfilLulusanScreen;
