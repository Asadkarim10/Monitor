import { AUTH } from './constant';



export const name= payload => ({
  type: AUTH.NAME,
  payload
});

export const number = () => ({
  type: AUTH.NUMBER,
  payload
});

