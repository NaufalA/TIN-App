import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Theme} from '../assets/styles';

const Section: React.FC<{title: string}> = ({children, title}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Theme.colors.primary,
    textAlign: 'center',
  },
});

export default Section;
