import style from './Form.module.css';
import { useState } from "react";
import validation from "../Validation/Validation";

export default function  Form({ login }){
    const [userData, setUserData] = useState({
        email:'',
        password:'',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value,
        }))
    }; 

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };

    return(
        <div className={style.formContainer}>
            <form className={style.form} onSubmit={handleSubmit}>
                <label htmlFor='email' className={style.labelEmail}>Email: </label>
                <input type='text' name='email' placeholder='email' className={style.inputEmail} value={userData.email} onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
                <br />
                <br />
                <label htmlFor='password' className={style.labelPassword} >Password: </label>
                <input type='text' name='password' placeholder='password' className={style.inputPassword} value={userData.password} onChange={handleChange} />
                {errors.password && <p>{errors.password}</p>}
                <button className={style.submit}>Submit</button>
            </form>
        </div>
    );
};