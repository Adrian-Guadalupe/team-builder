import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import TeamMembers from './components/TeamMembers';
import TeamMemberForm from './components/TeamMemberForm';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: '',
      email: '',
      role: '',
    }
  ]);

  const addTeamMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamMembers([...teamMembers, newMember])
  };

  return (
    <div className="App">
      <h2>Team Members</h2>
      <TeamMemberForm addTeamMember={addTeamMember} />
      <TeamMembers teamMembers={teamMembers} />
      {/* <Route
        path='/team-members'
        render={() => {
          return <TeamMembers teamMembers={teamMembers} />
        }}
      /> */}
    </div>
  );
}

export default App;
