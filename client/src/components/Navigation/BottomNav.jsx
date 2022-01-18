import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
});

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: 'music', color: '#795548' },
    { key: 'albums', title: 'Albums', icon: 'album', color: '#607D8B' },
    { key: 'recents', title: 'Recents', icon: 'history', color: '#3F51B5' }
  ]);
  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
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
