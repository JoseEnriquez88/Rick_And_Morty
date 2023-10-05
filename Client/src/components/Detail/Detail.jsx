import style from './Detail.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = '8df998fa8c44.5ab22dbc222c818a36b3';

//!URL BACK
const BACK_URL = 'http://localhost:3001/rickandmorty/character';

const Detail = () => {
	const { id } = useParams();
	const [character, setCharacter] = useState({});

	useEffect(() => {
		axios(`${BACK_URL}/${id}`)
			.then((response) => response.data)
			.then((data) => {
				if (data.name) {
					setCharacter(data);
				} else {
					window.alert('No hay personajes con ese ID');
				}
			});
		return setCharacter({});
	}, [id]);

	return (
		<div className={style.mainCntnr}>
			{character.name ? (
				<div className={style.container}>
					<h1 className={style.name}>{character.name}</h1>

					<div className={style.imgDataCntnr}>
						<div className={style.imgContainer}>
							<img className={style.image} src={character.image} alt='img' />
						</div>

						<div className={style.dataCntnr}>
							<p className={style.status}>STATUS: {character.status}</p>
							<p className={style.specie}>SPECIE: {character.species}</p>
							<p className={style.gender}>GENDER: {character.gender}</p>
							<p className={style.origin}>ORIGIN: {character.origin?.name}</p>
						</div>
					</div>
				</div>
			) : (
				<div className={style.loadCntnr}>
					<h2 className={style.loading}>Loading...</h2>
				</div>
			)}
		</div>
	);
};

export default Detail;
