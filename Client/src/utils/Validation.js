//!Validacion para el login
const validation = (userData) => {
  const errors = {};
  const regexMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = /.*\d+.*/;

  // valido el email
  if (!regexMail.test(userData.email)) errors.email = "Invalid email format";
  if (!userData.email) errors.email = "Email is required";
  // if (userData.email.length > 35) errors.email = 'Email must not exceed 35 characters';

  // valido la password
  //   errors.password = 'Password must contain at least one number and have a length between 6 and 10 characters';
  if (!userData.password) errors.password = "Password is required";
  if (!regexPassword.test(userData.password))
    errors.password = "Invalid password";

  return errors;
};

export default validation;
