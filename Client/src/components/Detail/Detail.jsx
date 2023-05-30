import style from './Detail.module.css';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = '8df998fa8c44.5ab22dbc222c818a36b3';

//!URL BACK
const BACK_URL = 'http://localhost:3001/rickandmorty/character';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${BACK_URL}/${id}`)
        .then(response => response.data)
        .then(( data ) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div className={style.container}>
            {character.name ? (  
                <div>
                    <h1 className={style.name}>{character.name}</h1>
                    <p className={style.status}>STATUS: {character.status}</p>
                    <p className={style.specie}>SPECIE: {character.species}</p>
                    <p className={style.gender}>GENDER: {character.gender}</p>
                    <p className={style.origin}>ORIGIN: {character.origin?.name}</p>
                    <img src={character.image} alt="img" className={style.image} />
                </div>
                ) : (
                    <h2>Loading...</h2>
                )}
        </div>
    );
};

export default Detail;