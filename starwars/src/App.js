import React from 'react';
import {useEffect, useState} from 'react';
import StarWarsCharacter from './components/StarWarsCharacter';
import axios from 'axios';
import styled from 'styled-components';



const App = () => {
  const[file, setFile] = useState();
  
  useEffect(() => {
    axios.get('https://swapi.co/api/people')
    .then((info)=>{
      setFile(info.data);
    })
    .catch(error => {
      console.log('major error', error);
    })
  }, []);

  let StarWarsCharacter = null;
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarWarsCharacter
      StarWarsCharacter = {file.StarWarsCharacter}/>
    </div>
  );
}

export default App;
