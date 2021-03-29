import { definitionError } from './definitionError';
import { URL_MAIN } from '../constants/constants';

export const register = (nameUser, email, password) => {
  return fetch(`${URL_MAIN}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: nameUser, email, password }),
    credentials: 'include',
  }).then((res) => {
    return definitionError(res);
  });
};

export const authorize = (email, password) => {
  return fetch(`${URL_MAIN}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  }).then((res) => {
    return definitionError(res);
  });
};

export const getContent = () => {
  return fetch(`${URL_MAIN}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then((res) => {
    return definitionError(res);
  });
};

export const logout = () => {
  return fetch(`${URL_MAIN}/signout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then((res) => {
    return definitionError(res);
  });
};
