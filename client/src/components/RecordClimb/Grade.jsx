import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { getGradingSystems } from '../../services/gradingsystem';

const styles = StyleSheet.create({
  gradeContainer: {
    marginVertical: 20
  }
});

const Grade = ({ onSystemChange, onGradeChange }) => {
  const [climbingType, setClimbingType] = useState(null);
  const [gradingSystems, setGradingSystems] = useState([]);
  const [gradingSystem, setGradingSystem] = useState(null);
  const [grades, setGrades] = useState(null);
  const [grade, setGrade] = useState(null);

  const handleTypeSelection = async () => {
    const systems = await getGradingSystems(climbingType);
    setGradingSystems(systems);
  };

  const handleSystemSelection = () => {
    const grades = gradingSystems.find(
      (system) => system.name === gradingSystem
    ).grades;
    const gradeItems = grades.map((grade) => ({ label: grade, value: grade }));
    setGrades(gradeItems);
    onSystemChange(gradingSystem);
  };

  const handleGradeSelection = (grade) => {
    setGrade(grade);
    onGradeChange(grade);
  };

  return (
    <View style={styles.gradeContainer}>
      <Text>Climbing type</Text>
      <RNPickerSelect
        style={pickerSelectStyles}
        value={climbingType}
        onValueChange={(value) => setClimbingType(value)}
        onClose={handleTypeSelection}
        items={[
          { label: 'Free climbing', value: 'Free climbing' },
          { label: 'Bouldering', value: 'Bouldering' }
        ]}
      />
      <Text>Grading system</Text>
      <RNPickerSelect
        style={pickerSelectStyles}
        value={gradingSystem}
        onValueChange={(value) => setGradingSystem(value)}
        onClose={handleSystemSelection}
        disabled={!climbingType}
        items={gradingSystems.map((system) => ({
          label: system.name,
          value: system.name
        }))}
      />
      <Text>Grade</Text>
      <RNPickerSelect
        style={pickerSelectStyles}
        value={grade}
        onValueChange={(value) => handleGradeSelection(value)}
        disabled={!gradingSystem}
        items={grades || []}
      />
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30 // to ensure the text is never behind the icon
  }
});

export default Grade;
