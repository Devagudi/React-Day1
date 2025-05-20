
import './App.css';
import React from 'react';
import FirstComponent from './Components/FirstComponent.jsx';
import UserGreeting from './Components/UserGreeting';
import StyledHeading from './Components/StyledHeading';
import Layout from './Components/Layout';

function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <FirstComponent />
      <UserGreeting name="Prasanna" />
       <StyledHeading />
        <Layout />
    </div>
  );
}

export default App;
