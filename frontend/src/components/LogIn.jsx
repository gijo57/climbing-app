import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogInWrapper = styled.div`
  border: 1px solid grey;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 2em auto;
  padding: 3em 0;
`;

const Form = styled(Box)`
  margin: 0.5em auto;
  padding: 0 5em 2em 5em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Field = styled(TextField)`
  && {
    margin: 1em 2em;
  }
`;

const LogInBtn = styled(Button)`
  && {
    width: 84%;
    margin: 1em 2em;
    padding: 1em;
  }
`;

const NewAcctBtn = styled(Button)`
  && {
    width: 40%;
    margin: 1em 2em;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const LogIn = () => {
  return (
    <LogInWrapper>
      <Form component="form">
        <Field
          id="username"
          label="Username or email"
          variant="outlined"
          margin="normal"
          size="small"
          fullWidth
          required
          error={false}
        />

        <Field
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
        <div>
          <Link to="">Forgot your password?</Link>
        </div>
      </Form>
      <Divider variant="middle" />
      <NewAcctBtn variant="contained">
        <NavLink to="signup">Create new account</NavLink>
      </NewAcctBtn>
    </LogInWrapper>
  );
};

export default LogIn;
