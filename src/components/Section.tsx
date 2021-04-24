import React from 'react';
import {View, Text} from 'react-native';
import {Home} from '../styles';

const Section: React.FC<{title: string}> = ({children, title}) => (
  <View style={Home.section}>
    <Text style={Home.sectionTitle}>{title}</Text>
    {children}
  </View>
);

export default Section;
