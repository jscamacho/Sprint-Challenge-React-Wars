import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import CharacterCard from './components/CharacterCard';
import PageNav from './components/PageNav';
import 'semantic-ui-css/semantic.min.css';
import './App.css';


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    Axios
      .get(`https://swapi.co/api/people/?page=${currentPage}`)
      .then(response => {
        console.log(response)
        setCharacters(response.data.results);
        const totalPages = Math.ceil(response.data.count / 10);
        setPages(totalPages);
      });
  }, [currentPage]);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="characters">
        {
          characters.map(character => {
            return <CharacterCard
                      key={character.name}
                      name={character.name}
                      birth_year={character.birth_year}
                      films={character.films.length} />
          })
        }
      </div>
      <PageNav
        pages={pages}
        setCurrentPage={setCurrentPage} />
    </div>
  );
}
export default App;
