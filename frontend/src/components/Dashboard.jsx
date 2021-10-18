import { useState } from 'react';
import Nav from './Nav';

const Dashboard = ({ onLogout }) => {
  return (
    <div>
      <Nav onLogout={onLogout} />
    </div>
  );
};

export default Dashboard;
