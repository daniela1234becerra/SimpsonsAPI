import { useState } from 'react';
import './App.css';
import simpsonsImage from './img/simpsonsImage.jpeg';
import Characters from './components/Characters';


function App() {

  const [characters, setCharacters] = useState(null);

  const getCharacters = async () => {
    try {
      const apiCharacters = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=1');
    const jsonCharacters = await apiCharacters.json();

    let charactersMap =jsonCharacters.map(item => {
      return[item.character, item]
    });
    let charactersMapArr = new Map(charactersMap);

    let uniqueCharacters = [...charactersMapArr.values()];

    setCharacters(uniqueCharacters);
    } catch (error) {
      console.log(error);
  }
}

  return (
      <div className='App'>
        <header className='App-header'>
          
          {characters ? (
           <Characters characters={characters} setCharacters={setCharacters}/>
          ) : (
            <>
              <img src={simpsonsImage} alt="Los simpsons"  className='img-home'/>
              <button className='btn' onClick={getCharacters}>Buscar personajes</button>
            </>
          )}
          
        </header>
      </div>
  )
}

export default App
