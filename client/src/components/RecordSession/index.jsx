import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Modal, Portal, Button, Provider, useTheme } from 'react-native-paper';
import RecordClimb from '../RecordClimb';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginVertical: 200
  },
  modal: {
    backgroundColor: 'white',
    paddingHorizontal: 40,
    height: '100%',
    margin: 20
  }
});

const RecordSession = () => {
  const { containerStyle, buttonStyle } = useTheme();
  const [isRunning, setIsRunning] = useState(false);

  const handleStartPress = () => {
    setIsRunning(!isRunning);
  };

  return (
    (isRunning && (
      <View style={containerStyle}>
        <RecordClimb />
      </View>
    )) || (
      <View style={containerStyle}>
        <Button
          mode="contained"
          style={[buttonStyle, styles.button]}
          onPress={handleStartPress}
        >
          Start session
        </Button>
      </View>
    )
  );
};

export default RecordSession;
