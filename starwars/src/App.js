import React from 'react';
import {useEffect, useState} from 'react';
import StarWarsCharMap from './components/StarWarsCharMap';
import axios from 'axios';

import { Container, Divider } from 'semantic-ui-react';



const App = () => {
  const[file, setFile] = useState([]);
  console.log(file)
  
  useEffect(() => {
    axios.get('https://swapi.co/api/people')
    .then(info=>{
      setFile(info.data.results);
    })
    .catch(error => {
      console.log('major error', error);
    });
  }, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
       <Container>
        <h1 className="title"> Jason's React Wars: <br/>May The Code Be With You</h1>
      <Divider />
        </Container>
      {file.length ? <StarWarsCharMap characters = {file}/>:<h1>loading...</h1>}
    </div>
  );
}
export default App;
