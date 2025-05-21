import React from 'react';
import PersonalBio from './Components/PersonalBio';

function App() {
  return (
    <div>
      <PersonalBio
        name="Devagudi Prasanna"
        age={29}
        bio="A passionate software developer skilled in React.js and JavaScript, eager to build innovative web applications."
      />
    </div>
  );
}

export default App;
