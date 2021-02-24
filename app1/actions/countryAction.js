import { COUNTRYCITY } from './constant';

export const getcity = payload => ({
  type: COUNTRYCITY.CITY,
  payload
});

export const setcity = payload => ({
    type: COUNTRYCITY.CITY_VALUE,
    payload
  });
