import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { login, logout, isAuth } from './services/auth';

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
            <Dashboard onLogout={handleLogout} />
          ) : (
            <Switch>
              <Route path="/signup">
                <SignUp />
              </Route>
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
