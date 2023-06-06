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


// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = '8df998fa8c44.5ab22dbc222c818a36b3';

//!URL BACK
const BACK_URL = 'http://localhost:3001/rickandmorty/character';
const URL_LOGIN = 'http://localhost:3001/rickandmorty/login/';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   // const EMAIL = 'jose@gmail.com';
   // const PASSWORD = '321dsa';
   
   //Busqueda de personaje por id
   const onSearch = async (id) => {
      try {
         const { data } = await axios(`${BACK_URL}/${id}`);
         
         // if(data.name) 
         if(!characters.find((char) => char.id === data.id)){
            setCharacters((oldChars) => [...oldChars, data]);
         } 

      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   };


   //eliminar personaje 
   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id));
   };

   //login para inicio de sesion
   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL_LOGIN + `?email=${email}&password=${password}`)
         const { access } = data;

         setAccess(access);
         access && navigate('/home');

      } catch (error) {
         console.log(error.message);
      }
   }


   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate]);

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess} />}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;
