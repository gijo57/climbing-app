import { useState, useEffect } from 'react';

import { fetchUser } from '../services/user';

const Profile = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const user = await fetchUser();
    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    user && (
      <div>
        <h1>Hola</h1>
      </div>
    )
  );
};

export default Profile;
