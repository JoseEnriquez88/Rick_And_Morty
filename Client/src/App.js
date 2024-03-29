import "./App.css";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import Error from "./components/Error/Error";

//!URL BACK
const BACK_URL = "http://localhost:3001/rickandmorty/character";
const URL_LOGIN = "http://localhost:3001/rickandmorty/login/";

function App() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(`${BACK_URL}/${id}`);

      if (!characters.find((char) => char.id === data.id)) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert("¡No hay personajes con este ID!");
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(
        URL_LOGIN + `?email=${email}&password=${password}`
      );
      const { access } = data;

      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      {!access ? (
        <>
          <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      ) : (
        <>
          <Nav onSearch={onSearch} setAccess={setAccess} />
          <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route
              path="/home"
              element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
