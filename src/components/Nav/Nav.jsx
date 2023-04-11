import style from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch }) => {
    return(
        <div className={style.container}>
            <button className={style.navLink}><Link to='/home'>Home</Link></button>
            <button className={style.navLink}><Link to='/about'>About</Link></button>
            <SearchBar onSearch={onSearch} />
        </div>
    );
};

export default Nav;