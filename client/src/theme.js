import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  dark: true,
  roundness: 5,
  containerStyle: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexGrow: 1,
    flexShrink: 1,
    paddingHorizontal: 50,
    paddingVertical: 50
  },
  inputStyle: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 1,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#6200ee'
  },
  buttonStyle: {
    width: '100%',
    marginVertical: 50,
    paddingVertical: 10,
    paddingHorizontal: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#6200ee'
  }
};

export default theme;
