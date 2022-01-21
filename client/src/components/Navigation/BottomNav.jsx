import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Profile from '../Profile';
import Home from '../Home';
import Session from '../Session';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  bottom: {
    marginTop: Constants.statusBarHeight
  }
});

const BottomNav = ({ index, setIndex, user }) => {
  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'session', title: 'New session', icon: 'history' },
    { key: 'profile', title: 'Profile', icon: 'account' }
  ]);

  const HomeRoute = () => <Home user={user} />;
  const ProfileRoute = () => <Profile user={user} />;
  const SessionRoute = () => <Session />;

  const renderScene = BottomNavigation.SceneMap({
    profile: ProfileRoute,
    home: HomeRoute,
    session: SessionRoute
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
