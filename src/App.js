import React, { useState } from 'react';
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
      
    </div>
  );
}

export default App;
