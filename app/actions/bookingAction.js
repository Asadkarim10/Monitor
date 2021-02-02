import { BOOKING } from './constant';

export const getbooking = ( payload ) => ({
  type: BOOKING.GETBOOKING,
  payload
});

export const setbooking = (payload) => ({
  type: BOOKING.GETBOOKING_VALUE,
  payload
});