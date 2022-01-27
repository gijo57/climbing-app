import React, { useState } from 'react';
import { BottomNavigation, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Profile from '../Profile';
import Home from '../Home';
import Workouts from '../Workouts';
import RecordSession from '../RecordSession';
import Constants from 'expo-constants';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  bottom: {
    marginTop: Constants.statusBarHeight
  }
});

const BottomNav = ({ index, setIndex, user }) => {
  const { iconStyle } = useTheme();

  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'recordSession', title: 'New session', icon: 'plus-circle-outline' },
    {
      key: 'workouts',
      title: 'Workouts',
      icon: () => <Icon name="fitness-center" iconStyle={iconStyle.selected} />
    },
    { key: 'profile', title: 'Profile', icon: 'account' }
  ]);

  const HomeRoute = () => <Home user={user} />;
  const ProfileRoute = () => <Profile user={user} />;
  const RecordSessionRoute = () => <RecordSession />;
  const WorkoutsRoute = () => <Workouts />;

  const renderScene = BottomNavigation.SceneMap({
    profile: ProfileRoute,
    home: HomeRoute,
    recordSession: RecordSessionRoute,
    workouts: WorkoutsRoute
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
