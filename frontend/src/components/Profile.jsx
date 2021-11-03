import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { styled as MUIstyled } from '@mui/material/styles';

const labelProps = {
  variant: 'outlined',
  sx: {
    margin: '0.5em 0'
  }
};

const ProfileField = MUIstyled(TextField)`
  width: 100%;
  margin: 5% 0;
  padding: 0 1em;
`;

const Profile = ({ user }) => {
  return (
    (user && (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>{user.username}</h1>
            <img
              src="https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png"
              alt="Profile img"
              width="100em"
            />
          </Grid>
          <Grid item xs={12}>
            <h2>Personal details</h2>
            <form>
              <ProfileField
                id="profile-input-username"
                label="Username"
                variant="standard"
                InputLabelProps={labelProps}
                value={user.username}
              />
              <ProfileField
                id="profile-input-firstname"
                label="First Name"
                variant="standard"
                InputLabelProps={labelProps}
                value={user.firstName}
              />
              <ProfileField
                id="profile-input-lastname"
                label="Last Name"
                variant="standard"
                InputLabelProps={labelProps}
                value={user.lastName}
              />
              <ProfileField
                id="profile-input-email"
                label="Email"
                variant="standard"
                InputLabelProps={labelProps}
                value={user.email}
              />
            </form>
          </Grid>
        </Grid>
      </div>
    )) ||
    null
  );
};

export default Profile;
