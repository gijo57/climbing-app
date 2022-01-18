import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Main from './src/Main';
import theme from './src/theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <>
        <StatusBar style="auto" />
        <Main />
      </>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
