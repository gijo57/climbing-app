import Nav from './Nav';
import Profile from '../components/Profile';
import { Switch, Route } from 'react-router-dom';

const Dashboard = ({ onLogout }) => {
  return (
    <div>
      <Nav onLogout={onLogout} />
      <Switch>
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
};

export default Dashboard;
