export const isValidEmail = (email) => {
  const isValid = /^[a-zA-Z0-9._%+-]+@chitkara\.edu\.in$/;
  return isValid.test(email);
};
