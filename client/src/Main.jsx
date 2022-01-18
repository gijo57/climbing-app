import React from 'react';
import BottomNav from './components/Navigation/BottomNav';
import TopNav from './components/Navigation/TopNav';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1
  },
  content: {}
});

const Main = () => {
  return (
    <View style={styles.container}>
      <TopNav />
      <Text>FUCK YOU</Text>
      <BottomNav />
    </View>
  );
};

export default Main;
