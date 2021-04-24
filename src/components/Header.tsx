import {View, Text, StyleSheet} from 'react-native';

const Header = (): JSX.Element => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Program Studi</Text>
    <Text style={styles.headerText}>Teknologi Industri Pertanian</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: 'lightblue',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default Header;
