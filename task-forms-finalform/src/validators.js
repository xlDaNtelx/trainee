export const requireValidator = (value = "") => {
  return (value.trim().length === 0) ? 'This field can\'t be empty ' : false;
};

export const minLengthValidator = (minLength) => {
  return (value) => {
    return (value.trim().length > minLength) ? 'Length must be less then 10 symbols ' : false;
  };
};

export const usernameLengthValidator = (value = "") => {
  return (value.trim().length > 10) ? 'Username length must be less then 10 symbols ' : false;
};

export const passwordUpperCaseValidator = (value = "") => {
  return (value.match(/[A-Z]/) === null) ? 'Password must contain uppercase symbol ' : false;
};

export const passwordLowerCaseValidator = (value = "") => {
  return (value.match(/[a-z]/) === null) ? 'Password must contain lowercase symbol ' : false;
};

export const passwordNumberValidator = (value = "") => {
  return (value.match(/\d/) === null) ? 'Password must contain number symbol ' : false;
}

export const passwordLengthValidator = (value = "") => {
  return (value.trim().length < 6) ? 'Password length must be more then 6 symbols ' : false;
};

export const dateFormatValidator = (value = "") => {
  return (value.match(/([0][1-9]|[1][0-9]|[2][0-9]|[3][0-1])\/([0][1-9]|[1][0-2])\/([1][9][4-9][0-9]|[2][0][0][1-9])/) === null || value.length > 10)
    ? 'Date must be in format dd/mm/yyyy for example "20/10/1996"'
    : false;
};

export const confirmPasswordValidator = (passValue = '', confirmPassValue = '') => {
  return (passValue !== confirmPassValue) ? 'Password and confirm password must have the same value' : false;
};