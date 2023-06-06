import { Link } from "react-router-dom";
import style from './Card.module.css';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id)
      }else{
         setIsFav(true);
         addFav( { id, name, species, gender, image, onClose });
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>
         <button onClick={handleFavorite} className={style.FavBtn}>{isFav ? '❤️' : '🤍'}</button>
         <button onClick={() => onClose(id)} className={style.closeButton}>x</button>
         <img className={style.image} src={image} alt='' />
         <Link to={`/detail/${id}`} className={style.link} ><h2 className={style.name} >Name: {name}</h2></Link>
         {/* <h2 className={style.status}>Status: {status}</h2> */}
         {/* <h2 className={style.species}>Specie: {species}</h2> */}
         <h2 className={style.gender}>Gender: {gender}</h2>
         {/* <h2 className={style.origin}>Origin: {origin}</h2> */}
      </div>
   );
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)