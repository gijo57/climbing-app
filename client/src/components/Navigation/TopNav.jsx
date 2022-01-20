import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0
  }
});

const TopNav = ({ onSignOut }) => {
  const handlePress = () => {
    onSignOut();
  };

  return (
    <Appbar style={styles.top}>
      <Appbar.Action
        icon="archive"
        onPress={() => console.log('Pressed archive')}
      />
      <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
      <Appbar.Action
        icon="label"
        onPress={() => console.log('Pressed label')}
      />
      <Appbar.Action icon="delete" onPress={handlePress} />
    </Appbar>
  );
};

export default TopNav;
