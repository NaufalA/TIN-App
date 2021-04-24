import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';

type props = {
  title?: string;
  subtitle?: string;
  bgUrl: ImageSourcePropType;
};

const Header = (props: props): JSX.Element => (
  <View style={styles.header}>
    <ImageBackground
      source={props.bgUrl}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
      }}>
      {(props.title || props.subtitle) && (
        <View style={{backgroundColor: '#39687380', padding: 2}}>
          <Text style={styles.headerText}>{props.title}</Text>
          <Text style={styles.headerText}>{props.subtitle}</Text>
        </View>
      )}
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    height: 300,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default Header;
