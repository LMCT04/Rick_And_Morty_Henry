import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components.Nav';
import { useState } from 'react';

function App () {
const[characters, setCharacters] = useState([]);

const onSearch = (character) => {
  setCharacters([
    ...characters
  ])

}


  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} />
      <div>
        <Cards
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
