export const requireValidator = (value = "") => {
  return (value.trim().length === 0) ? 'This field can\'t be empty ' : undefined;
};

export const minLengthValidator = (minLength) => {
  return (value) => {
    return (value.trim().length > minLength) ? 'Length must be less then 10 symbols ' : undefined;
  };
};

export const usernameLengthValidator = (value = "") => {
  return (value.trim().length > 10) ? 'Username length must be less then 10 symbols ' : undefined;
};

export const passwordUpperCaseValidator = (value = "") => {
  return (value.match(/[A-Z]/) === null) ? 'Password must contain uppercase symbol ' : undefined;
};

export const passwordLowerCaseValidator = (value = "") => {
  return (value.match(/[a-z]/) === null) ? 'Password must contain lowercase symbol ' : undefined;
};

export const passwordNumberValidator = (value = "") => {
  return (value.match(/\d/) === null) ? 'Password must contain number symbol ' : undefined;
}

export const passwordLengthValidator = (value = "") => {
  return (value.trim().length < 6) ? 'Password length must be more then 6 symbols ' : undefined;
};

export const dateFormatValidator = (value = "") => {
  return (value.match(/([0][1-9]|[1][0-9]|[2][0-9]|[3][0-1])\/([0][1-9]|[1][0-2])\/([1][9][4-9][0-9]|[2][0][0][1-9])/) === null || value.length > 10)
    ? 'Date must be in format dd/mm/yyyy for example "20/10/1996"'
    : null;
};

export const confirmPasswordValidator = (passValue = '', confirmPassValue = '') => {
  return (passValue !== confirmPassValue) ? 'Password and confirm password must have the same value' : null;
};