// import logo from './logo.svg';
import * as React from "react"
import './App.css';
import OnePage from './Main/Index'

function App(props) {
  const editable = props.edit || false

  return (
      <OnePage editable={editable}/>
  );
}

export default App;
