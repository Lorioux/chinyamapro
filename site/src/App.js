import React from 'react';
import './App.css';
import Projecto from './components/Projecto';

function App() {

  const currencies = ["MZN", "USD"];

  return (
    <Projecto currencies={currencies}/>
  );
}

export default App;