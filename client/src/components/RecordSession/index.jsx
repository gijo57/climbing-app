import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

const styles = {
  button: {
    alignSelf: 'center',
    marginVertical: 200
  }
};

const RecordSession = () => {
  const { containerStyle, buttonStyle } = useTheme();
  const [isRunning, setIsRunning] = useState(false);

  const handleStartPress = () => {
    setIsRunning(!isRunning);
  };

  return (
    (isRunning && (
      <View>
        <Text>Runnin'</Text>
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
