import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Profile from '../Profile';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  bottom: {
    marginTop: Constants.statusBarHeight
  }
});

const ProgramsRoute = () => <Text>1</Text>;

const RecentsRoute = () => <Text>2</Text>;

const BottomNav = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'programs', title: 'Programs', icon: 'album', color: '#607D8B' },
    { key: 'recents', title: 'Recents', icon: 'history', color: '#3F51B5' },
    { key: 'profile', title: 'Profile', icon: 'account', color: '#795548' }
  ]);
  const renderScene = BottomNavigation.SceneMap({
    profile: Profile,
    programs: ProgramsRoute,
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
