import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { styled as MUIstyled } from '@mui/material/styles';
import { editUser } from '../services/user';

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
  const [isEditable, setIsEditable] = useState(false);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
    }
  }, [user]);

  const handleEditClick = () => {
    if (isEditable) {
      editUser({ username, firstName, lastName, email });
    }
    setIsEditable(!isEditable);
  };

  return (
    (username && (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>{username}</h1>
            <img
              src="https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png"
              alt="Profile img"
              width="100em"
            />
            <button onClick={handleEditClick}>
              {isEditable ? 'Save' : 'Edit details'}
            </button>
          </Grid>
          <Grid item xs={12}>
            <h2>Personal details</h2>
            <form>
              <ProfileField
                id="profile-input-username"
                label="Username"
                variant="standard"
                InputLabelProps={labelProps}
                value={username}
                InputProps={{ readOnly: !isEditable }}
                onChange={(event) => setUsername(event.target.value)}
              />
              <ProfileField
                id="profile-input-firstname"
                label="First Name"
                variant="standard"
                InputLabelProps={labelProps}
                value={firstName}
                InputProps={{ readOnly: !isEditable }}
                onChange={(event) => setFirstName(event.target.value)}
              />
              <ProfileField
                id="profile-input-lastname"
                label="Last Name"
                variant="standard"
                InputLabelProps={labelProps}
                value={lastName}
                InputProps={{ readOnly: !isEditable }}
                onChange={(event) => setLastName(event.target.value)}
              />
              <ProfileField
                id="profile-input-email"
                label="Email"
                variant="standard"
                InputLabelProps={labelProps}
                value={email}
                InputProps={{ readOnly: !isEditable }}
                onChange={(event) => setEmail(event.target.value)}
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
