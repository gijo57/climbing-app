import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import ImageGallery from '../ImageGallery';

const Session = () => {
  const { containerStyle, buttonStyle } = useTheme();

  return (
    <View style={containerStyle}>
      <ImageGallery />
      <Button
        style={buttonStyle}
        mode="contained"
        onPress={() => console.log('Pressed')}
      >
        Edit session
      </Button>
    </View>
  );
};

export default Session;
