import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Main from './src/Main';
import theme from './src/theme';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return (
    <>
      <PaperProvider theme={theme}>
        <NativeRouter>
          <Main />
        </NativeRouter>
        <StatusBar style="auto" />
      </PaperProvider>
    </>
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
