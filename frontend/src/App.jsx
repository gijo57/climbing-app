import { useState } from 'react';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        {user ? (
          <Dashboard />
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/">
              <LogIn />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
};

export default App;
