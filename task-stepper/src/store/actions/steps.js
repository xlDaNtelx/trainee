import { LOGIN_VISITED, PASSWORD_VISITED, ADDITIONAL_VISITED } from './actionsType';

export const loginVisitedChange = () => ({
  type: LOGIN_VISITED,
});

export const passwordVisitedChange = () => ({
  type: PASSWORD_VISITED,
});

export const additionalVisitedChange = () => ({
  type: ADDITIONAL_VISITED,
});