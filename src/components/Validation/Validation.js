export default function Validation(userData) {
    const errors = {};
    const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*\d).{6,10}$/;

    //Acá valido el email
    if(!userData.email) errors.email = 'Email is requiered';
    if(!regexMail.test(userData.email)) errors.email = 'Invalid email format';
    if(userData.email.length > 35) errors.email = "Email can't have more than 35 characters";
    
    //Aca valido el password
    if(!userData.password) errors.password = 'Password is required';
    if(!regexPassword.test(userData.password)) errors.password = 'Password should have at least one number and a length between 6 and 10 characters';
    
    return errors;
}