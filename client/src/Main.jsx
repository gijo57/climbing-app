import React, { useState, useEffect } from 'react';
import BottomNav from './components/Navigation/BottomNav';
import TopNav from './components/Navigation/TopNav';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MyRoutes from './components/MyRoutes';
import MySessions from './components/MySessions';
import Settings from './components/Settings';
import PersonalDetails from './components/Profile/PersonalDetails';
import EditSession from './components/Session/EditSession';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Route, Switch } from 'react-router-native';
import { getUser } from './services/user';
import { signOut } from './services/auth';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1
  },
  content: {}
});

const Main = () => {
  const [user, setUser] = useState(null);
  const [bottomNavIndex, setBottomNavIndex] = useState(0);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const user = await getUser();
    setUser(user);
  };

  const handleAuthentication = (user) => setUser(user);

  const handleSignOut = async () => {
    await signOut();
    setUser(null);
  };

  return (
    <View style={styles.container}>
      <Switch>
        {(user && [
          <Route key="1" exact path="/">
            <TopNav onSignOut={handleSignOut} />
            <BottomNav
              index={bottomNavIndex}
              setIndex={setBottomNavIndex}
              user={user}
            />
          </Route>,
          <Route key="2" exact path="/personal-details">
            <PersonalDetails user={user} />
          </Route>,
          <Route key="3" exact path="/my-routes">
            <MyRoutes />
          </Route>,
          <Route key="3" exact path="/my-sessions">
            <MySessions />
          </Route>,
          <Route key="4" exact path="/edit-session/:id">
            <EditSession />
          </Route>,
          <Route key="4" exact path="/settings">
            <Settings />
          </Route>
        ]) || (
          <Route exact path="/">
            <SignIn onAuthentication={handleAuthentication} />
          </Route>
        )}
        <Route exact path="/signup">
          <SignUp onAuthentication={handleAuthentication} />
        </Route>
      </Switch>
    </View>
  );
};

export default Main;
