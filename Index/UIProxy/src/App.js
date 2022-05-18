// import logo from './logo.svg';
import { ButtonGroup, Button } from "@mui/material";
import * as React from "react"
import './App.css';
import OnePage from './pages/Index'

function App(props) {
  const editable = props.edit || false

  return (
      <OnePage editable={editable}/>
  );
}

export default App;
