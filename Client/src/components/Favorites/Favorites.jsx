import style from "./favorites.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className={style.container}>
      <select onChange={handleOrder} className={style.select}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter} className={style.select}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="allCharacters">All Characters</option>
      </select>

      <div className={style.cardsContainer}>
        {myFavorites?.map((fav) => {
          return (
            <div className={style.card} key={fav.id}>
              <Card
                id={fav.id}
                name={fav.name}
                species={fav.species}
                gender={fav.gender}
                image={fav.image}
                onClose={fav.onClose}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
