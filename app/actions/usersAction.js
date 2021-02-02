import { USERS } from './constant';

export const getpassenger = (payload) => ({
  type: USERS.GETPASSENGER,
  payload
});

export const getdoctor = (payload) => ({
  type: USERS.GETDOCTOR,
  payload
});

export const getpayment = (payload) => ({
  type: USERS.GETPAYMENT,
  payload
});

export const setusers = (payload) => ({
  type: USERS.SETUSERS_VALUE,
  payload
});