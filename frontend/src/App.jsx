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
import { login, logout } from './services/auth';
import { fetchUser } from './services/user';
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
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const user = await fetchUser();
    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleLogin = async (credentials) => {
    const user = await login(credentials);
    setUser(user);
  };

  const handleLogout = async () => {
    logout();
    setUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          {user ? (
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
