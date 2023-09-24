import style from './SearchBar.module.css';
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return(
      <div className={style.container}>
         <input className={style.searchInput} placeholder='TYPE A NUMBER AND FIND A CHARACTER...' type='search' onChange={handleChange} value={id} autoFocus/>
         <button className={style.searchButton} onClick={() => {onSearch(id); setId('')}}><SearchIcon className={style.icon}/></button>
      </div>
   );
}

export default SearchBar;
