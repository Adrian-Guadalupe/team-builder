import React, { useState } from 'react';
import TeamMembers from './components/TeamMembers';
import TeamMemberForm from './components/TeamMemberForm';
import logo from './logo.svg';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState('');

  const addTeamMember = member => {
    setTeamMembers([...teamMembers, member]);
  };

  return (
    <div className="App">
      <h2>Team Members</h2>
      <TeamMemberForm />
      <TeamMembers />
    </div>
  );
}

export default App;
