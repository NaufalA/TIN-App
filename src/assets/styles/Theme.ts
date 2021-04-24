import {DefaultTheme} from '@react-navigation/native';

const Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#396873',
    text: '#7a7a7a',
    background: '#ffffff',
    card: 'lightblue',
    border: 'lightblue',
    notification: '#fafafa',
  },
};

export default Theme;
