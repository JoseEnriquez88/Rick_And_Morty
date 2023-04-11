import { Link } from "react-router-dom";
import style from './Card.module.css';

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.container}>
         <button onClick={() => onClose(id)} className={style.closeButton}>x</button>
         <img className={style.image} src={image} alt='' />
         <Link to={`/detail/${id}`} ><h2 className={style.name} >Name: {name}</h2></Link>
         <h2 className={style.status}>Status: {status}</h2>
         <h2 className={style.species}>Specie: {species}</h2>
         <h2 className={style.gender}>Gender: {gender}</h2>
         <h2 className={style.origin}>Origin: {origin}</h2>
      </div>
   );
}
