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
import { Link } from 'react-router-dom';

const Form = styled(Box)`
  max-width: 400px;
  margin: 2em auto;
  padding: 2em 4em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 600px) {
    border: 1px solid grey;
    border-radius: 2em;
  }
`;

const LogInBtn = styled(Button)`
  && {
    width: 100%;
    margin: 2em auto;
    padding: 1em 3em;
  }
`;

const NewAcctBtn = styled(Button)`
  && {
    width: 100%;
    margin-top: 3em;
    padding: 1em;
  }
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
    onLogin({ emailOrUsername, password });
    setEmailOrUsername('');
    setPassword('');
  };

  return (
    <Form component="form" onSubmit={handleLoginSubmit}>
      <TextField
        onChange={(event) => setEmailOrUsername(event.target.value)}
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
      <LogInBtn variant="outlined" type="submit">
        Log In
      </LogInBtn>
      <Link to="">Forgot your password?</Link>
      <NewAcctBtn variant="contained">
        <Link to="signup">Create new account</Link>
      </NewAcctBtn>
    </Form>
  );
};

export default LogIn;
