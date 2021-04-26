import React from 'react';
import {View, Text, Image, Button, Linking} from 'react-native';
import {Staff} from '../utils';
import {Theme} from '../assets/styles';

const StaffCard = (props: Staff): JSX.Element => {
  const openURL = (url: string) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
      }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: Theme.colors.primary,
          textAlign: 'center',
        }}>
        {props.title}
      </Text>
      {props.imgUrl && (
        <Image
          style={{
            flex: 3,
            margin: 10,
            width: '90%',
            height: 220,
            resizeMode: 'contain',
          }}
          source={props.imgUrl}></Image>
      )}
      <Text
        style={{
          color: Theme.colors.text,
          textAlign: 'center',
        }}>
        {props.name}
      </Text>
      <View style={{flex: 1, margin: 5, alignSelf: 'stretch'}}>
        {props.scholarUrl && (
          <View style={{flex: 1, margin: 2, alignSelf: 'stretch'}}>
            <Button
              title="Scholar"
              color={Theme.colors.primary}
              onPress={() => openURL(props.scholarUrl ? props.scholarUrl : '#')}
            />
          </View>
        )}
        {props.sintaUrl && (
          <View style={{flex: 1, margin: 2, alignSelf: 'stretch'}}>
            <Button
              title="Sinta"
              color={Theme.colors.primary}
              onPress={() => openURL(props.sintaUrl ? props.sintaUrl : '#')}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default StaffCard;
