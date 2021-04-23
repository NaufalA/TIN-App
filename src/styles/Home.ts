import {useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import Theme from './Theme';

const Home = StyleSheet.create({
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

export default Home;
