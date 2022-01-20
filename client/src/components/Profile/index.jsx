import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

const Profile = () => {
  return (
    <View>
      <Link to="/personal-details">
        <Text>Personal details</Text>
      </Link>
    </View>
  );
};

export default Profile;
