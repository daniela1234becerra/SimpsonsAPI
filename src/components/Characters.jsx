// Characters.js
import React from 'react';
import '../index.css';
import '../App.css';

const Characters = ({ character, handleShowMore }) => {
  return (
    <div className='characters'>
      <div className='characters-container'>
        <div className='character-details' key={character.quote}>
          <img src={character.image} alt={character.character} />
          <p>{character.quote}</p>
          <h3>{character.character}</h3>
        </div>
      </div>
      <button className='btn' onClick={handleShowMore}>
        <span className='back'>Show me more</span>
      </button>
    </div>
  );
};

export { Characters };