import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { styled as MUIstyled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

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

const SignUp = () => {
  return (
    <Form component="form">
      <p>SIGN UP</p>
      <Names>
        <TextField
          id="firstName"
          label="First Name"
          variant="outlined"
          margin="normal"
          size="small"
          fullWidth
          required
        />
        <TextField
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
      <Button>Sign Up</Button>
      <Button>
        <NavLink to="/">Cancel</NavLink>
      </Button>
    </Form>
  );
};

export default SignUp;
