import style from './Form.module.css';
import { useState } from "react";
import validation from "../Validation/Validation";

export default function  Form({ login }){
    const [userData, setUserData] = useState({
        email:'',
        password:'',
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

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

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return(
        <div className={style.formContainer}>
            <form className={style.form} onSubmit={handleSubmit}>
                <label htmlFor='email' className={style.labelEmail}>Email: </label>
                <input type='text' name='email' placeholder='Enter your email' className={style.inputEmail} value={userData.email} onChange={handleChange} />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                <br />
                <br />
                <label htmlFor='password' className={style.labelPassword} >Password: </label>
                <div style={{ display: 'flex' }}>
                    <input type={showPassword ? 'text' : 'password'} name='password' placeholder='Enter your password' className={style.inputPassword} value={userData.password} onChange={handleChange} />
                    <button type='button' onClick={handleShowPassword} className={style.showPasswordButton}>
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                <button disabled={!userData.email || !userData.password || errors.email || errors.password} className={style.submit} >LOG IN</button>
            </form>
        </div>
    );
};