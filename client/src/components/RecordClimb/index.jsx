import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Modal,
  Portal,
  Button,
  Provider,
  Switch,
  Divider,
  ToggleButton,
  Chip,
  useTheme
} from 'react-native-paper';
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
  },
  ascendTypeWrapper: {
    marginVertical: 20
  },
  ascendTypeButton: {
    padding: 5,
    width: '25%'
  },
  tagsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20
  },
  tag: {
    margin: 2
  }
});

const RecordClimb = () => {
  const [isNewClimbVisible, setIsNewClimbVisible] = useState(false);
  const { containerStyle, buttonStyle, switchWrapperStyle } = useTheme();
  const showModal = () => setIsNewClimbVisible(true);
  const hideModal = () => setIsNewClimbVisible(false);
  const [grade, setGrade] = useState(null);
  const [gradingSystem, setGradingSystem] = useState(null);
  const [isAscended, setIsAscended] = useState(false);
  const [ascendType, setAscendType] = useState(null);
  const [tags, setTags] = useState([
    'hurr',
    'durrrrurrur',
    'asdasd',
    'asdasdasd',
    'asdasdasd'
  ]);
  const [notes, setNotes] = useState('');

  const handleSystemChange = (system) => {
    setGradingSystem(system);
  };

  const handleGradeChange = (grade) => {
    setGrade(grade);
  };

  const handleTagAddition = () => {};

  const handleTagRemoval = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={isNewClimbVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modal}
        >
          <View style={switchWrapperStyle}>
            <Text>Ascended</Text>
            <Switch
              value={isAscended}
              onValueChange={() => {
                setIsAscended(!isAscended);
              }}
            />
          </View>
          {isAscended && (
            <ToggleButton.Row
              style={styles.ascendTypeWrapper}
              onValueChange={(value) => setAscendType(value)}
              value={ascendType}
            >
              <ToggleButton
                style={styles.ascendTypeButton}
                icon={() => (
                  <View>
                    <Text>Onsight</Text>
                  </View>
                )}
                value="Onsight"
              />
              <ToggleButton
                style={styles.ascendTypeButton}
                icon={() => (
                  <View>
                    <Text>Flash</Text>
                  </View>
                )}
                value="Flash"
              />
              <ToggleButton
                style={styles.ascendTypeButton}
                icon={() => (
                  <View>
                    <Text>Redpoint</Text>
                  </View>
                )}
                value="Redpoint"
              />
              <ToggleButton
                style={styles.ascendTypeButton}
                icon={() => (
                  <View>
                    <Text>Repeat</Text>
                  </View>
                )}
                value="Repeat"
              />
            </ToggleButton.Row>
          )}
          <Divider />
          <Grade
            onSystemChange={handleSystemChange}
            onGradeChange={handleGradeChange}
          />
          <Divider />
          <View style={styles.tagsWrapper}>
            {tags.map((tag) => (
              <Chip onClose={() => handleTagRemoval(tag)} style={styles.tag}>
                {tag}
              </Chip>
            ))}
            <Chip onPress={handleTagAddition} style={styles.tag}>
              +
            </Chip>
          </View>
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
