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
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  scrollContainerStyle: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  inputStyle: {
    width: '100%',
    marginTop: 15,
    paddingHorizontal: 1
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30
  },
  buttonStyle: {
    width: '100%',
    marginVertical: 50,
    paddingVertical: 10,
    paddingHorizontal: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#6200ee'
  },
  backArrowStyle: {
    alignSelf: 'flex-start',
    position: 'absolute',
    left: 10
  },
  iconStyle: {
    unselected: {
      color: 'rgba(255, 255, 255, 0.5)'
    },
    selected: {
      color: 'rgba(255, 255, 255, 1)'
    }
  }
};

export default theme;
