import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import Picker, { defaultStyles } from 'react-native-picker-select';
import { getGradingSystems } from '../../services/gradingsystem';

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

const Grade = () => {
  const [climbingType, setClimbingType] = useState(null);
  const [gradingSystems, setGradingSystems] = useState([]);
  const [gradingSystem, setGradingSystem] = useState(null);
  const [grades, setGrades] = useState(null);
  const [grade, setGrade] = useState(null);

  const handleTypeSelection = async () => {
    const response = await getGradingSystems(climbingType);
    const systems = response.map((system) => ({
      label: system.name,
      value: system.name
    }));
    setGradingSystems(systems);
  };

  const handleSystemSelection = () => {
    const currentGrades = gradingSystem.grades;
    console.log(currentGrades);
  };

  return (
    <View>
      <Text>Climbing type</Text>
      <Picker
        value={climbingType}
        onValueChange={(value) => setClimbingType(value)}
        onClose={handleTypeSelection}
        items={[
          { label: 'Free climbing', value: 'Free climbing' },
          { label: 'Bouldering', value: 'Bouldering' }
        ]}
      />
      <Text>Grading system</Text>
      <Picker
        value={gradingSystem}
        onValueChange={(value) => setGradingSystem(value)}
        onClose={handleSystemSelection}
        disabled={!climbingType}
        items={gradingSystems}
      />
      <Text>Grade</Text>
      <Picker
        value={grade}
        onValueChange={(value) => setGrade(value)}
        disabled={!gradingSystem}
        items={[
          { label: 'Football', value: 'football' },
          { label: 'Baseball', value: 'baseball' },
          { label: 'Hockey', value: 'hockey' }
        ]}
      />
    </View>
  );
};

export default Grade;
