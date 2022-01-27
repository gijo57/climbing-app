import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme, Appbar } from 'react-native-paper';
import { useHistory } from 'react-router-native';

const Settings = () => {
  const history = useHistory();
  const { containerStyle, backArrowStyle } = useTheme();

  return (
    <View style={containerStyle}>
      <Appbar.BackAction style={backArrowStyle} onPress={history.goBack} />
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
