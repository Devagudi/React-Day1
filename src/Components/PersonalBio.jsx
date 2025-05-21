import React from 'react';
import './PersonalBio.css';

const PersonalBio = ({ name, age, bio }) => {
  return (
    <div className="personal-bio">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
    </div>
  );
};

export default PersonalBio;
