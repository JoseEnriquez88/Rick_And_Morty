import style from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

const Nav = ({ onSearch, setAccess }) => {
	const navigate = useNavigate();
	const handleLogOut = () => {
		setAccess(false);
		navigate('/');
	};

	return (
		<nav className={style.navbar}>
			<div className={style.buttons}>
				<Link to='/home'>HOME</Link>
				<Link to='/about'>ABOUT</Link>
				<Link to='/favorites'>FAVORITES</Link>
			</div>

			<SearchBar onSearch={onSearch} />
			<button onClick={handleLogOut} className={style.logout}>
				LOG OUT <LogoutIcon />
			</button>
		</nav>
	);
};

export default Nav;
