import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Form = styled(Box)`
  margin: 3em auto;
  padding: 3em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
  border: 1px solid grey;
  border-radius: 20px;
`;

const Names = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Field = styled(TextField)`
  && {
    margin: 1em 2em;
  }
`;

const SignUp = () => {
  return (
    <Form component="form">
      <Names>
        <Field
          id="firstName"
          label="First Name"
          variant="filled"
          margin="normal"
          size="small"
          fullWidth
          required
        />
        <Field
          id="lastName"
          label="Last Name"
          variant="filled"
          margin="normal"
          size="small"
          fullWidth
          required
        />
      </Names>
      <Field
        id="username"
        label="Username"
        variant="filled"
        margin="normal"
        size="small"
        fullWidth
        required
        error={false}
      />
      <Field
        id="email"
        label="Email"
        variant="filled"
        margin="normal"
        type="email"
        size="small"
        fullWidth
        error={false}
        required
      />
      <Field
        id="password"
        label="Password"
        variant="filled"
        margin="normal"
        type="password"
        size="small"
        fullWidth
        required
        error={false}
      />
      <Field
        id="repeatPassword"
        label="Repeat password"
        variant="filled"
        margin="normal"
        type="password"
        size="small"
        fullWidth
        error={false}
        required
      />
      <Button>Sign Up</Button>
    </Form>
  );
};

export default SignUp;
