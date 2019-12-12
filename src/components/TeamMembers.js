import React from "react";

const TeamMembers = props => {
  return (
    <div className="team-member-list">
      {props.teamMembers.map(member => {
        return (
          <div className="team-member" key={member.name}>
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.email}</p>
            <button>Edit</button>
          </div>
        );
      })}
    </div>
  );
};
export default TeamMembers;