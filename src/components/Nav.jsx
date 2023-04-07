import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch }) => {
    return(
        <div>
            <button><Link to='/home'>Home</Link></button>
            <button><Link to='/about'>About</Link></button>
            <SearchBar onSearch={onSearch} />
        </div>
    );
};

export default Nav;