import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '8df998fa8c44.5ab22dbc222c818a36b3';

function App() {
   const [characters, setCharacters] = useState([]);
   
   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
         if (data.id) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== parseInt(id));
      setCharacters(charactersFiltered);

   }

   return(
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
         
      </div>
   );
}

export default App;
