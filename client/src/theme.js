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
    paddingVertical: 10
  },
  scrollContainerStyle: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 50,
    paddingVertical: 10
  },
  inputStyle: {
    width: '100%',
    marginTop: 15,
    paddingHorizontal: 1
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
