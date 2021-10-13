import TextField from '@mui/material/TextField';

const SignUp = () => {
  return (
    <form>
      <TextField id="firstName" label="First Name" variant="filled" required />
      <TextField id="lastName" label="Last Name" variant="filled" required />
      <TextField id="username" label="Username" variant="filled" required />
      <TextField
        id="email"
        label="Email"
        variant="filled"
        type="email"
        required
      />
      <TextField
        id="password"
        label="Password"
        variant="filled"
        type="password"
        required
      />
      <TextField
        id="repeatPassword"
        label="Repeat password"
        variant="filled"
        type="password"
        required
      />
    </form>
  );
};

export default SignUp;
