import {CAR_RENT} from './constant'

export const getvehicle = (payload)=>({
    type: CAR_RENT.GETVEHICLES,
    payload
});

export const getsinglevehicle = (payload) =>({
    type: CAR_RENT.GETSINGLEVEHICLE,
    payload
});

export const getbooking = (payload) =>({
    type: CAR_RENT.GETBOOKING,
    payload
});

export const setcarrentvalue = (payload) =>({
    type: CAR_RENT.SETCARRENT_VALUE,
    payload
});
