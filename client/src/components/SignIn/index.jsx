import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Button, HelperText, useTheme } from 'react-native-paper';

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
    </View>
  );
};

export default SignIn;
