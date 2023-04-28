import style from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, setAccess }) => {
    
    const handleLogOut = (event) => {
        setAccess(false)
    }

    return(
        <div className={style.container}>
            <button className={style.btnHome} ><Link to='/home'>HOME</Link></button>
            <button className={style.btnAbout} ><Link to='/about'>ABOUT</Link></button>
            <button className={style.btnFavorites} ><Link to='/favorites'>FAVORITES</Link></button>
            <button className={style.btnLogOut} onClick={handleLogOut}>LOG OUT</button>
            <SearchBar onSearch={onSearch} />
        </div>
    );
};

export default Nav;