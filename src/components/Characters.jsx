import React from 'react'
import logoSimpsons from '../img/logoSimpsons.png';
import menu from '../img/menu.png';

export default function Characters(props) {
    const {characters, setCharacters} = props;

    const resetCharacters = () => {
        setCharacters(null)
    }

  return (
    <>
        <div className='nav-container'>
            <img src={logoSimpsons} alt="Logo Simpsons" className='logo' onClick={resetCharacters}/>
            <img src={menu} alt="Menu" className='menu'/>
        </div>
        <div className='main-container'>
            <h3 className='discover-title'>Discover some Simpsons quotes</h3>
            <input  type="text" placeholder='Search' className='search-bar'/>

        </div>
        <div className='characters'>
            <div className='characters-container'>
                {characters.map((character, index) => (
                        
                    <div className='character-details' key={index}>
                        <h3>{character.character}</h3>
                        <img src={character.image} alt={character.character} />
                        <p>{character.quote}</p>
                    </div>
                ))}
            </div>
            <button className='btn'>
                <span className='back'>Show me more</span>
            </button>
        </div>
    </>
   
  )
}

