import * as React from "react"

// import PeopleOutline from "@mui/icons-material/PeopleOutline"
import './App.css';
// import { IconButton } from "@mui/material";
import Login from "./components/LoginInterface";

function App() {

  const [loginvisible, setVisibility] = React.useState(true)

  const handleLoginCallback = (e, status) => {
     if (status === "open"){
        setVisibility(true)
     }
     else{
       setVisibility(false)
     }
  }

  return (
    <>
      {/* <IconButton onClick={(e) => handleLoginCallback(e, "open")}>
        <PeopleOutline />
      </IconButton> */}

      { loginvisible ? <Login open={loginvisible} visibilityCallback={handleLoginCallback} /> : undefined }
    </>
  );
}

export default App;
