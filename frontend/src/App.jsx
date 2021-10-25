import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Nav from './components/Nav';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { login, logout, isAuth } from './services/auth';
import styled from 'styled-components';

const Content = styled.div`
  margin: 0;
  padding: 3em;
  height: 100vh;
  @media screen and (max-width: 600px) {
    padding: 1em;
  }
`;

const App = () => {
  const [auth, setAuth] = useState(true);

  const readAuthStatus = async () => {
    const authStatus = await isAuth();
    setAuth(authStatus.auth);
  };

  useEffect(() => {
    readAuthStatus();
  }, []);

  const handleLogin = async (credentials) => {
    const authStatus = await login(credentials);
    setAuth(authStatus.auth);
  };

  const handleLogout = async () => {
    const authStatus = await logout();
    setAuth(authStatus.auth);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          {auth ? (
            <div>
              <Nav onLogout={handleLogout} />
              <Content className="content">
                <Switch>
                  <Route path="/profile" component={Profile} />
                  <Route path="/" component={Dashboard} />
                </Switch>
              </Content>
            </div>
          ) : (
            <Switch>
              <Route path="/signup" component={SignUp} />
              <Route path="/">
                <LogIn onLogin={handleLogin} />
              </Route>
            </Switch>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
