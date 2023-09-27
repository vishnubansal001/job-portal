export const isValidEmail = (email) => {
  const isValid = /^[a-zA-Z]+[0-9]{4}\.be12@chitkara\.edu\.in$/;
  return isValid.test(email);
};
