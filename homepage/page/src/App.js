// import logo from './logo.svg';
import { ButtonGroup, Button } from "@mui/material";
import * as React from "react"
import './App.css';
import OnePage from './pages/Index'

function App(props) {
  const enableEdit = props.edit || false
  const [edit, setEditable] = React.useState(enableEdit)

  const handleEditable = () => {
    let status = !edit
    setEditable(status)
  }
  return (
    <>
      {/* <ButtonGroup onClick={handleEditable}>
        <Button>Editable</Button>
      </ButtonGroup> */}
      <OnePage editable={edit}/>
    </>
  );
}

export default App;
