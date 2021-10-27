import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { styled as MUIstyled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { signUp } from '../services/auth';

const Form = MUIstyled(Box)`
  max-width: 700px;
  margin: 3em auto;
  padding: 2em 4em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 600px) {
    padding: 2em 6em;
  }

  @media screen and (min-width: 992px) {
    border: 1px solid grey;
    border-radius: 2em;
  }
`;

const Names = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;

  @media screen and (min-width: 600px) {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .MuiFormControl-root {
      width: 45%;
    }
  }
`;

const NavLink = MUIstyled(Link)`
  text-decoration: none;
`;

const SignUp = ({ onSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp({
        username,
        password,
        email,
        firstName,
        lastName
      });
      onSignUp(user);
    }

    setUsername('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setRepeatPassword('');
    setPassword('');
  };

  return (
    <Form component="form">
      <p>SIGN UP</p>
      <Names>
        <TextField
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}
          id="firstName"
          label="First Name"
          variant="outlined"
          margin="normal"
          size="small"
          fullWidth
          required
        />
        <TextField
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
          id="lastName"
          label="Last Name"
          variant="outlined"
          margin="normal"
          size="small"
          fullWidth
          required
        />
      </Names>
      <TextField
        onChange={(event) => setUsername(event.target.value)}
        value={username}
        id="username"
        label="Username"
        variant="outlined"
        margin="normal"
        size="small"
        fullWidth
        required
        error={false}
      />
      <TextField
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        id="email"
        label="Email"
        variant="outlined"
        margin="normal"
        type="email"
        size="small"
        fullWidth
        error={false}
        required
      />
      <TextField
        onChange={(event) => setPassword(event.target.value)}
        value={password}
        id="password"
        label="Password"
        variant="outlined"
        margin="normal"
        type="password"
        size="small"
        fullWidth
        required
        error={false}
      />
      <TextField
        onChange={(event) => setRepeatPassword(event.target.value)}
        value={repeatPassword}
        id="repeatPassword"
        label="Repeat password"
        variant="outlined"
        margin="normal"
        type="password"
        size="small"
        fullWidth
        error={false}
        required
      />
      <Button onClick={handleSubmit}>Sign Up</Button>
      <Button>
        <NavLink to="/">Cancel</NavLink>
      </Button>
    </Form>
  );
};

export default SignUp;
