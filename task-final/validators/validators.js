import { DateTime } from 'luxon';

export const require = value => value ? undefined : 'IS REQUIRED';
export const email = value => {
  const regular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regular.test(String(value).toLowerCase()) ? undefined : 'MUST BE VALID';
}
export const minLength = value => (value.trim().length >= 6) ? undefined : 'LENGTH MUST BE MORE THEN 6 SYMBOLS';
export const password = (value, allValues) => (allValues.password !== undefined && allValues.password.trim().length >= 6 && allValues.confirmPassword.trim().length >= 6 && allValues.password === allValues.confirmPassword) ? undefined : 'MUST BE THE SAME WITH PASSWORD';
export const day = (value) => {
  return /([0][1-9]|[1][0-9]|[2][0-9]|[3][0-1])/.test(value)
    ? undefined
    : 'WRONG DAY';
};
export const month = (value) => {
  return /([0][1-9]|[1][0-2])/.test(value)
    ? undefined
    : 'WRONG MONTH';
};
export const year = (value) => {
  return /([1][9][5-9][1-9]|[2][0][0][0])/.test(value)
    ? undefined
    : 'WRONG YEAR';
};

export const date = (value, allValues) => {
  const { day, month, year } = allValues;
  if (day !== undefined && month !== undefined && year !== undefined) {
    const validationDate = DateTime.fromObject({ year: parseInt(year), month: parseInt(month), day: parseInt(day) });
    return validationDate.isValid ? undefined : 'WRONG DATE';
  }
  return undefined;
}