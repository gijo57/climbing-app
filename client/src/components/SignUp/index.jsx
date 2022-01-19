import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Button, HelperText, useTheme } from 'react-native-paper';
import { Link } from 'react-router-native';

const SignUp = ({ onAuthentication }) => {
  const { inputStyle, buttonStyle, containerStyle } = useTheme();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [birthDate, setBirthDate] = useState(null);

  const handleSubmit = () => {
    console.log('submitted');
  };

  const handleFirstNameChange = (value) => {
    setFirstName(value);
  };

  const handleLastNameChange = (value) => {
    setLastName(value);
  };

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleBirthDateChange = (value) => {
    setBirthDate(value);
  };

  return (
    <View style={containerStyle}>
      <TextInput
        label="First name"
        placeholder="First name"
        style={inputStyle}
        onChangeText={handleFirstNameChange}
        value={firstName}
      />
      <HelperText
        style={{ alignSelf: 'flex-start' }}
        padding="none"
        type="Error"
      >
        Test helper text
      </HelperText>
      <TextInput
        label="Last name"
        placeholder="Last name"
        style={inputStyle}
        onChangeText={handleLastNameChange}
        value={lastName}
      />
      <HelperText
        style={{ alignSelf: 'flex-start' }}
        padding="none"
        type="Error"
      >
        Test helper text
      </HelperText>
      <TextInput
        label="Username"
        placeholder="Username"
        style={inputStyle}
        onChangeText={handleUsernameChange}
        value={username}
      />
      <HelperText
        style={{ alignSelf: 'flex-start' }}
        padding="none"
        type="Error"
      >
        Test helper text
      </HelperText>
      <TextInput
        label="Email"
        placeholder="Email"
        style={inputStyle}
        onChangeText={handleEmailChange}
        value={email}
      />
      <HelperText
        style={{ alignSelf: 'flex-start' }}
        padding="none"
        type="Error"
      >
        Test helper text
      </HelperText>
      <TextInput
        label="Birth date"
        placeholder="Birth date"
        style={inputStyle}
        onChangeText={handleBirthDateChange}
        value={birthDate}
      />
      <HelperText
        style={{ alignSelf: 'flex-start' }}
        padding="none"
        type="Error"
      >
        Test helper text
      </HelperText>
      <Button dark mode="contained" style={buttonStyle} onPress={handleSubmit}>
        Sign Up
      </Button>
      <Link to="/">
        <Text>Cancel</Text>
      </Link>
    </View>
  );
};

export default SignUp;
