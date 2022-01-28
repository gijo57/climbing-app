import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Modal, Portal, Button, Provider, useTheme } from 'react-native-paper';
import Grade from './Grade';

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

const RecordClimb = () => {
  const [newClimbVisible, setNewClimbVisible] = React.useState(false);
  const { containerStyle, buttonStyle } = useTheme();
  const showModal = () => setNewClimbVisible(true);
  const hideModal = () => setNewClimbVisible(false);

  return (
    <Provider>
      <Portal>
        <Modal
          visible={newClimbVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modal}
        >
          <Grade />
          <Button mode="contained" style={buttonStyle}>
            Save climb
          </Button>
        </Modal>
      </Portal>
      <Button mode="contained" style={buttonStyle} onPress={showModal}>
        Record climb
      </Button>
    </Provider>
  );
};

export default RecordClimb;
