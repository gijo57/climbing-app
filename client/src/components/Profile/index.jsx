import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';
import { Drawer, Avatar, useTheme } from 'react-native-paper';

const styles = {
  avatar: {
    marginTop: 50,
    marginBottom: 20
  }
};

const Profile = ({ user }) => {
  const { containerStyle } = useTheme();
  return (
    <View>
      <View style={containerStyle}>
        <Avatar.Image size={100} style={styles.avatar} />
        <Text>{user.username}</Text>
      </View>
      <Link to="/personal-details">
        <Drawer.Item icon="account" label="Personal details" />
      </Link>
      <Link to="/personal-details">
        <Drawer.Item icon="account" label="Personal details" />
      </Link>
    </View>
  );
};

export default Profile;
