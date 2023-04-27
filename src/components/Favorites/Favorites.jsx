import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards} from "../../redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
        setAux(true);
    }

    return(
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allcharacters">All Characters</option>
            </select>
            {
                myFavorites?.map(fav => {
                    return(
                        <Card 
                            key={fav.id}
                            name={fav.name}
                            status={fav.status}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                            origin={fav.origin}
                            onClose={fav.onClose}
                        />
                    )
                })
            }
        </div>
    )
}


const mapStateToprops = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToprops,
    null,
)(Favorites);  