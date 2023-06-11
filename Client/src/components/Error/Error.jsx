import style from './error.module.css';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.container}>
                <h1 className={style.cuatro}>404</h1>

                <div className={style.textContainer}>
                    <h2>I'm sorry, but it seems like you've lost your way!</h2>
                    <h2>The page you're looking for can't be found anywhere</h2>
                </div>
                <Link to='/'>
                <button className={style.btn}>GO BACK TO HOMEPAGE!</button>
                </Link>
            </div>
        </div>
    )
};


export default Error;