import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ characters, onClose }) => {
  return (
    <div className={style.divCards}>
      {characters.map(
        ({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              image={image}
              origin={origin.name}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
};

export default Cards;
