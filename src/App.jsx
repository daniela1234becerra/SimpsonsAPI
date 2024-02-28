import React, { useState, useEffect } from 'react';
import { Characters } from './components/Characters';
import { Header } from './components/Header';
import { Search } from './components/Search';
import simpsonsImage from './img/simpsonsImage.jpeg';
import './App.css';
import './index.css';

function App() {
  const [quote, setQuote] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [showContent, setShowContent] = useState(false); // Controla la visibilidad del contenido

  useEffect(() => {
    // Solo obtenemos un quote aleatorio si el contenido está visible
    if (showContent) {
      getRandomQuote();
    }
  }, [showContent]);

  const getRandomQuote = async () => {
    try {
      const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
      const [data] = await response.json();
      setQuote(data);
    } catch (error) {
      console.error("Failed to fetch random quote:", error);
    }
  };

  const getCharacterQuotes = async () => {
    if (!selectedCharacter) return;

    try {
      const response = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${selectedCharacter}`);
      const data = await response.json();
      if (data.length > 0 && (!quote || data[0].quote !== quote.quote)) {
        setQuote(data[0]);
      }
    } catch (error) {
      console.error(`Failed to fetch quotes for ${selectedCharacter}:`, error);
    }
  };

  const handleSearch = (e) => {
    setSelectedCharacter(e.target.value);
  };

  const handleShowMore = () => {
    getCharacterQuotes();
  };

  // Función para cambiar la visibilidad del contenido principal
  const handleImageClick = () => {
    setShowContent(true);
  };

  const handleLogoClick = () => {
    setShowContent(false);
  };
  
  return (
    <div className='App'>
      {showContent ? (
        <>
          <Header handleLogoClick={handleLogoClick}/>
          <Search handleSearch={handleSearch} />
          {quote && (
            <Characters character={quote} handleShowMore={handleShowMore} />
          )}
        </>
      ) : (
        <div className='App-header' onClick={handleImageClick}>
          <img
            src={simpsonsImage}
            alt="Los Simpsons"
            className='img-home' onClick={handleLogoClick}
          />
        </div>
      )}
    </div>
  );
}

export default App;