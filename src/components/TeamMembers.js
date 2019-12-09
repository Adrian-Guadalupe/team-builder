import React from "react";

const TeamMembers = props => {
  console.log(props);
  return (
    <div className="team-member-list">
      {props.teamMembers.map(member => {
        return (
          <div className="note" key={member.name}>
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.email}</p>
          </div>
        );
      })}
    </div>
  );
};
export default TeamMembers;