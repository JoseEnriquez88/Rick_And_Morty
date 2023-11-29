import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";

function Card({ id, name, status, species, gender, origin, image, onClose }) {
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, species, gender, image, onClose }));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={style.container}>
      <button onClick={handleFavorite} className={style.FavBtn}>
        {isFav ? <FavoriteIcon className={style.iconFav} /> : <FavoriteBorderIcon />}
      </button>
      <button onClick={() => onClose(id)} className={style.closeButton}>
        <CloseIcon titleAccess="Close" className={style.iconclose} />
      </button>
      <img className={style.image} src={image} alt="" />
      <Link to={`/detail/${id}`} className={style.link}>
        <h2 className={style.name}>Name: {name}</h2>
      </Link>
      <h2 className={style.gender}>Gender: {gender}</h2>
    </div>
  );
}

export default Card;
