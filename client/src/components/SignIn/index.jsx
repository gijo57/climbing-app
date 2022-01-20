import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, HelperText, TextInput, useTheme } from 'react-native-paper';
import { Link } from 'react-router-native';
import { signIn } from '../../services/auth';

const SignIn = ({ onAuthentication }) => {
  const [emailOrUsername, setEmailOrUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { inputStyle, buttonStyle, containerStyle } = useTheme();

  const handleSubmit = async () => {
    const user = await signIn({ emailOrUsername, password });
    onAuthentication(user);
  };

  const handleUsernameChange = (value) => {
    setEmailOrUsername(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  return (
    <View style={containerStyle}>
      <TextInput
        label="Email or username"
        placeholder="Email or username"
        style={inputStyle}
        onChangeText={handleUsernameChange}
        value={emailOrUsername}
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
        secureTextEntry
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
