import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styled from 'styled-components';
import { styled as MUIstyled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { logIn } from '../services/auth';

const Form = MUIstyled(Box)`
  max-width: 400px;
  margin: 2em auto;
  padding: 2em 3em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 600px) {
    border: 1px solid grey;
    border-radius: 2em;
  }
`;

const LogInBtn = MUIstyled(Button)`
  && {
    width: 100%;
    margin: 2em auto;
    padding: 1em 3em;
  }
`;

const PasswordLink = styled(Link)`
  margin-bottom: 10%;
  text-decoration: none;
  font-size: 0.5em;
`;

const SignUpLink = styled(Link)`
  text-decoration: none;
  font-size: 0.7em;
`;

const LogIn = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const user = await logIn({ emailOrUsername, password });
    onLogin(user);
    setEmailOrUsername('');
    setPassword('');
  };

  return (
    <Form component="form" onSubmit={handleLoginSubmit}>
      <p>LOGIN</p>
      <TextField
        onChange={(event) => setEmailOrUsername(event.target.value)}
        value={emailOrUsername}
        id="username"
        label="Username or email"
        variant="outlined"
        margin="normal"
        size="small"
        fullWidth
        required
        error={false}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircleIcon />
            </InputAdornment>
          )
        }}
      />

      <TextField
        onChange={(event) => setPassword(event.target.value)}
        value={password}
        id="password"
        label="Password"
        variant="outlined"
        margin="normal"
        type={showPassword ? 'text' : 'password'}
        size="small"
        fullWidth
        required
        error={false}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment: (
            <InputAdornment onClick={handleShowPassword} position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <PasswordLink component={RouterLink} to="">
        Forgot your password?
      </PasswordLink>
      <LogInBtn variant="outlined" type="submit">
        Log In
      </LogInBtn>

      <SignUpLink component={RouterLink} to="/signup">
        Don't have an account? Sign up!
      </SignUpLink>
    </Form>
  );
};

export default LogIn;
