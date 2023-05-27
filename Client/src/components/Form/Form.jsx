import style from './Form.module.css';
import { useState } from "react";
import validation from "../Validation/Validation";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
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

  return (
    <div className={style.formContainer}>
      <form className={style.form} onSubmit={handleSubmit}>

        {/* label e input del mail */}
        <div className={style.mailCntnr}>
          <label htmlFor='email' className={style.labelEmail}>Email: </label>
          <input type='text' name='email' placeholder='Enter your email' className={style.inputEmail} value={userData.email} onChange={handleChange} />
          {errors.email && <p className={style.errors}>{errors.email}</p>}
        </div>


        {/* label e input de la password */}
        <div className={style.passCntnr}>
          <label htmlFor='password' className={style.labelPassword} >Password: </label>

          <div className={style.passCntnr}>
            <input type={showPassword ? 'text' : 'password'} name='password' placeholder='Enter your password' className={style.inputPassword} value={userData.password} onChange={handleChange} />

            {/* boton para esconder o mostrar la contraseña */}
            {/* <button type='button' onClick={handleShowPassword} className={style.togglePassBtn}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button> */}

          </div>

          {errors.password && <p className={style.errors}>{errors.password}</p>}
        </div>


        {/* boton del login */}
        <button disabled={!userData.email || !userData.password || errors.email || errors.password} className={`${style.login} ${errors.email || errors.password ? style.disabled : ''}`} >Log In</button>
      </form>
    </div>
  );
};