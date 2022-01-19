import React, { useState } from 'react';
import BottomNav from './components/Navigation/BottomNav';
import TopNav from './components/Navigation/TopNav';
import SignIn from './components/SignIn';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { Route, Switch, Redirect } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1
  },
  content: {}
});

const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  return (
    <View style={styles.container}>
      <Switch>
        {(isAuthenticated && (
          <Route exact path="/">
            <>
              <TopNav />
              <BottomNav />
            </>
          </Route>
        )) || (
          <Route exact path="/">
            <SignIn onAuthentication={setIsAuthenticated} />
          </Route>
        )}
      </Switch>
    </View>
  );
};

export default Main;
