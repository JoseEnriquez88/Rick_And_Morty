import style from './Form.module.css';
import { useState } from "react";
import validation from "../Validation/Validation";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import LoginIcon from '@mui/icons-material/Login';

const Form = ({ login }) => {
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })

    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value
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
          <input
            type='text'
            name='email'
            placeholder='Enter your email'
            className={style.inputEmail}
            value={userData.email}
            onChange={handleChange} />
          {errors.email && <p className={style.errors}>{errors.email}</p>}
        </div>


        {/* label e input de la password */}

        <div className={style.passCntnr}>
          <label htmlFor='password' className={style.labelPassword} >Password: </label>
          <input
            type={showPassword ? 'text' : 'password'}
            name='password'
            placeholder='Enter your password'
            className={style.inputPassword}
            value={userData.password}
            onChange={handleChange}
          />
          {showPassword ? (
            <FaEyeSlash onClick={handleShowPassword} className={style.icon} />
          ) : (
            <FaEye onClick={handleShowPassword} className={style.icon} />
          )}
        </div>
        {errors.password && <p className={style.errors}>{errors.password}</p>}

        {/* boton del login */}
        <button
          disabled={!userData.email || !userData.password || errors.email || errors.password}
          className={`${style.login} ${errors.email || errors.password ? style.disabled : ''}`} >Log In <LoginIcon/></button>
      </form>
    </div>
  );
}; 

export default Form;