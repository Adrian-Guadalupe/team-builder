import React, { useState } from 'react';

const TeamMemberForm = ({ addTeamMember }) => {
   const [member, setMember] = useState({
      name: '',
      email: '',
      role: '',
   });

   const handleChanges = event => {
      setMember({ ...member, [event.target.name]: event.target.value });
   };

   const submitForm = event => {
      event.preventDefault();
      addTeamMember(member);
      setMember({
         name: '',
         email: '',
         role: '',
      });
   };

   return (
      <form onSubmit={submitForm}>
         <label htmlFor='name'>Name</label>
         <input 
            id='name'
            type='text'
            name='name'
            placeholder='Enter name here'
            onChange={handleChanges}
            value={member.name}
         />

         <label htmlFor='email'>Email</label>
         <input 
            id='email'
            type='email'
            name='email'
            placeholder='Enter email here'
            onChange={handleChanges}
            value={member.email}
         />

         <label htmlFor='role'>Role</label>
         <input 
            id='role'
            type='text'
            name='role'
            placeholder='Enter role here'
            onChange={handleChanges}
            value={member.role}
         />

         <button type='submit'>Add Team Member</button>
      </form>
   );
};

export default TeamMemberForm