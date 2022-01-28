import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Picker from 'react-native-picker-select';

const Grade = () => {
  const [gradingSystem, setGradingSystem] = useState(null);
  const [grade, setGrade] = useState(null);

  return (
    <View>
      <Text>Grading system</Text>
      <Picker
        onValueChange={(value) => setGradingSystem(value)}
        items={[
          { label: 'Football', value: 'football' },
          { label: 'Baseball', value: 'baseball' },
          { label: 'Hockey', value: 'hockey' }
        ]}
      ></Picker>
    </View>
  );
};

export default Grade;
