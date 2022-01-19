import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Button, HelperText, useTheme } from 'react-native-paper';
import { Link } from 'react-router-native';

const SignIn = ({ onAuthentication }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { inputStyle, buttonStyle, containerStyle } = useTheme();

  const handleSubmit = () => {
    console.log('username: ', username, 'password: ', password);
    onAuthentication(true);
  };

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  return (
    <View style={containerStyle}>
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
        label="Password"
        placeholder="Password"
        style={inputStyle}
        onChangeText={handlePasswordChange}
        value={password}
      />
      <HelperText
        style={{ alignSelf: 'flex-start' }}
        padding="none"
        type="Error"
      >
        Test helper text
      </HelperText>
      <Button dark mode="contained" style={buttonStyle} onPress={handleSubmit}>
        Sign In
      </Button>

      <Text>Don't have an account yet?</Text>
      <Link to="/signup">
        <Text>Click here to register!</Text>
      </Link>
    </View>
  );
};

export default SignIn;
