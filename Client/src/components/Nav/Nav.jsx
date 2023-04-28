import style from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, setAccess }) => {
    
    const handleLogOut = (event) => {
        setAccess(false)
    }

    return(
        <div className={style.container}>
            <button className={style.btnHome} ><Link to='/home' className={style.linkHome}>HOME</Link></button>
            <button className={style.btnAbout} ><Link to='/about' className={style.linkAbout}>ABOUT</Link></button>
            <button className={style.btnFavorites} ><Link to='/favorites' className={style.linkFav}>FAVORITES</Link></button>
            <button className={style.btnLogOut} onClick={handleLogOut}>LOG OUT</button>
            <SearchBar onSearch={onSearch} />
        </div>
    );
};

export default Nav;