const validation = (userData) => {
  const errors = {};
  const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexPassword = /^(?=.*\d).{6,10}$/;

  // valido el email
  if (!userData.email) errors.email = 'Email is required';
  if (!regexMail.test(userData.email)) errors.email = 'Invalid email format';
  if (userData.email.length > 35) errors.email = 'Email must not exceed 35 characters';

  // valido la password
  if (!userData.password) errors.password = 'Password is required';
  if (!regexPassword.test(userData.password))
    errors.password = 'Password must contain at least one number and have a length between 6 and 10 characters';

  return errors;
};

export default validation;
