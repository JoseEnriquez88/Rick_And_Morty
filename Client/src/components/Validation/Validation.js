const Validation = (userData) => {
    const errors = {};
    const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const regexPassword = /^(?=.*\d).{6,10}$/;

    //Acá valido el email
    if(!userData.email) errors.email = 'Requiere un mail';
    if(!regexMail.test(userData.email)) errors.email = 'Formato de mail invalido';
    if(userData.email.length > 35) errors.email = "El email no debe contener mas de 35 caracteres";
    
    //Aca valido el password
    if(!userData.password) errors.password = 'Requiere una contraseña';
    // if(!regexPassword.test(userData.password)) errors.password = 'La contraseña debe contener al menos un número y una longitud de entre 6 y 10 caracteres';
    
    return errors;
}

export default Validation;