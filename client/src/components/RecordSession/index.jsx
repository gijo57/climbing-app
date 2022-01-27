import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Modal, Portal, Button, Provider, useTheme } from 'react-native-paper';

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
  const [newClimbVisible, setNewClimbVisible] = React.useState(false);

  const showModal = () => setNewClimbVisible(true);
  const hideModal = () => setNewClimbVisible(false);

  const handleStartPress = () => {
    setIsRunning(!isRunning);
  };

  return (
    (isRunning && (
      <View style={containerStyle}>
        <Provider>
          <Portal>
            <Modal
              visible={newClimbVisible}
              onDismiss={hideModal}
              contentContainerStyle={styles.modal}
            >
              <Button mode="contained" style={buttonStyle}>
                Save climb
              </Button>
            </Modal>
          </Portal>
          <Button mode="contained" style={buttonStyle} onPress={showModal}>
            Record climb
          </Button>
        </Provider>
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
