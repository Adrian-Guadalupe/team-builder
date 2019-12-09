import React, { useState } from 'react';
import TeamMembers from './components/TeamMembers'
import logo from './logo.svg';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState({
    name: '',
    email: '',
    role: ''
  });

  const onInputChange = e => {
    setTeamMembers({
      ...teamMembers,
      [event.target.name]: event.target.value,
    })
  };

  return (
    <div className="App">
      <TeamMembers />
    </div>
  );
}

export default App;
