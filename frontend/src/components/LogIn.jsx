import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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

const LogIn = () => {
  return (
    <Form component="form">
      <TextField
        id="username"
        label="Username or email"
        variant="outlined"
        margin="normal"
        size="small"
        fullWidth
        required
        error={false}
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
      <LogInBtn variant="outlined">Log In</LogInBtn>
      <Link to="">Forgot your password?</Link>
      <NewAcctBtn variant="contained">
        <Link to="signup">Create new account</Link>
      </NewAcctBtn>
    </Form>
  );
};

export default LogIn;
