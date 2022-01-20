import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Profile from '../Profile';
import Home from '../Home';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  bottom: {
    marginTop: Constants.statusBarHeight
  }
});

const RecentsRoute = () => <Text>2</Text>;

const BottomNav = ({ index, setIndex }) => {
  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home', color: '#607D8B' },
    { key: 'recents', title: 'Recents', icon: 'history', color: '#3F51B5' },
    { key: 'profile', title: 'Profile', icon: 'account', color: '#795548' }
  ]);
  const renderScene = BottomNavigation.SceneMap({
    profile: Profile,
    home: Home,
    recents: RecentsRoute
  });

  return (
    <BottomNavigation
      style={styles.bottom}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;
