import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '8df998fa8c44.5ab22dbc222c818a36b3';

function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'jose@gmail.com';
   const PASSWORD = '321dsa';
   
   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
         if (data.id) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con ese ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id));
   };

   const login = (userData) => {
      if(userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true);
         navigate('/home');
      }
   }; 

   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate]);

   return(
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess} />}
         <Routes>
            <Route path='/' element={<Form login={login} />}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />}/>
         </Routes>

         
      </div>
   );
}

export default App;
