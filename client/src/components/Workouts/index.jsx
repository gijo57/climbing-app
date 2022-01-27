import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

const Workouts = () => {
  const { containerStyle } = useTheme();

  return (
    <View style={containerStyle}>
      <Text>Wrkouts</Text>
    </View>
  );
};

export default Workouts;
