import { AUTH } from './constant';


export const name= payload => ({
  type: AUTH.NAME,
  payload
});

export const email= payload => ({
    type: AUTH.EMAIL,
    payload
  });

  export const feedback= payload => ({
    type: AUTH.FEEDBACK,
    payload
  });  