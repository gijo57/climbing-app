import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { Button, HelperText, TextInput, useTheme } from 'react-native-paper';
import { Link } from 'react-router-native';
import { signUp } from '../../services/auth';
import { useHistory } from 'react-router-native';

const SignUp = ({ onAuthentication }) => {
  const history = useHistory();
  const { inputStyle, buttonStyle, scrollContainerStyle } = useTheme();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [birthDate, setBirthDate] = useState(new Date());
  const [password, setPassword] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState(null);

  const handleSubmit = async () => {
    const user = await signUp({
      firstName,
      lastName,
      username,
      email,
      password
    });
    onAuthentication(user);
    history.push('/');
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
    <ScrollView contentContainerStyle={scrollContainerStyle}>
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
        mode="flat"
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
      <HelperText
        style={{ alignSelf: 'flex-start' }}
        padding="none"
        type="Error"
      >
        Test helper text
      </HelperText>
      <TextInput
        label="Password"
        secureTextEntry
        placeholder="Password"
        style={inputStyle}
        onChangeText={setPassword}
        value={password}
      />
      <HelperText
        style={{ alignSelf: 'flex-start' }}
        padding="none"
        type="Error"
      >
        Test helper text
      </HelperText>
      <TextInput
        label="Repeat password"
        secureTextEntry
        placeholder="Repeat password"
        style={inputStyle}
        onChangeText={setRepeatPassword}
        value={repeatPassword}
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
    </ScrollView>
  );
};

export default SignUp;
