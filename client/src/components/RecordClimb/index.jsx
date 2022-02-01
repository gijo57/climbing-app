import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
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
import { Icon } from 'react-native-elements';
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
  },
  addTagButton: {
    width: 10,
    borderRadius: 50,
    margin: 2,
    backgroundColor: '#EBEBEB'
  },
  newTagField: {
    width: 100,
    position: 'absolute',
    padding: 10,
    paddingRight: 35,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 50,
    margin: 2,
    color: 'grey'
  },
  newTagFieldWrapper: {
    width: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  newTagFieldAddIcon: {
    marginHorizontal: 10
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
  const [showAddNewTagField, setShowAddNewTagField] = useState(false);
  const [newTag, setNewTag] = useState('');
  const [tags, setTags] = useState([]);
  const [notes, setNotes] = useState('');

  const handleSystemChange = (system) => {
    setGradingSystem(system);
  };

  const handleGradeChange = (grade) => {
    setGrade(grade);
  };

  const handleTagAddition = () => {
    const updatedTags = [...tags, newTag];
    setTags(updatedTags);
    setNewTag('');
    setShowAddNewTagField(false);
  };

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
          <ScrollView>
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
                <Chip
                  key={tag}
                  onClose={() => handleTagRemoval(tag)}
                  style={styles.tag}
                >
                  {tag}
                </Chip>
              ))}
              {(showAddNewTagField && (
                <View style={styles.newTagFieldWrapper}>
                  <TextInput
                    style={styles.newTagField}
                    value={newTag}
                    onChangeText={(value) => setNewTag(value)}
                  />
                  <Icon
                    onPress={handleTagAddition}
                    name="check"
                    iconStyle={styles.newTagFieldAddIcon}
                  />
                </View>
              )) || (
                <Button
                  onPress={() => setShowAddNewTagField(true)}
                  mode="text"
                  icon="plus"
                  style={styles.addTagButton}
                />
              )}
            </View>
            <Button mode="contained" style={buttonStyle}>
              Save climb
            </Button>
          </ScrollView>
        </Modal>
      </Portal>
      <Button mode="contained" style={buttonStyle} onPress={showModal}>
        Record climb
      </Button>
    </Provider>
  );
};

export default RecordClimb;
