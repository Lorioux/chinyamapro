import React from 'react';
import './App.css';
import Projecto from './components/Projecto';
import ProjectoList from './components/ProjectoList';
import Menu from './components/ProjectoMenu';

function App() {

  const currencies = ["MZN", "USD"];

  const [visibility, setVisibility] = React.useState({
                                              formIsVisible: false,
                                              listIsVisible: true
                                            })

  const handleCreateCallback = () =>{
    setVisibility({listIsVisible: false, formIsVisible: true})
  }

  const handleListActionCallback = () =>{
    setVisibility({ listIsVisible: true, formIsVisible: false})
    console.log(visibility.formIsVisible)
  }

  return (
    <>
      <Menu onCreateCallback={handleCreateCallback} onListActionCallback={handleListActionCallback}></Menu>
      {visibility.formIsVisible ? <Projecto currencies={currencies} visibility={visibility.formIsVisible}/> : undefined}
      {visibility.listIsVisible ? <ProjectoList visibility={visibility.listIsVisible}/> : undefined}
    </>
  );
}

export default App;