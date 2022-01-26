import React from 'react';
import { useHistory } from 'react-router-native';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';

const MySessions = () => {
  const { scrollContainerStyle, backArrowStyle } = useTheme();
  const history = useHistory();

  return (
    <ScrollView contentContainerStyle={scrollContainerStyle}>
      <Appbar.BackAction style={backArrowStyle} onPress={history.goBack} />
      <Text>My sessions</Text>
    </ScrollView>
  );
};

export default MySessions;
