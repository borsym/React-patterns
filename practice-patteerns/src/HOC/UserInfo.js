import React from 'react';

export const UserInfo = ({ user }) => {
  const { name, age, hairColor, hobbies } = user || {};
  return user ? (
    <>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{hairColor}</p>
      <h3>hobbies</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading...</p>
  );
};
