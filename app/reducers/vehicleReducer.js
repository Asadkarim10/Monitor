import { CAR_RENT } from "../actions/constant";

const  initialAuthState = {
    vehicles:  [] ,
    currentvehicle: null,
    bookings : [],
};

export const vehicleReducer = (state = initialAuthState, action) => {
      switch (action.type) {
        case CAR_RENT.SETCARRENT_VALUE: {
          return {
            ...state,
            vehicles: ( action.payload.vehicles ) ?? state.vehicles,
            currentvehicle :  ( action.payload.currentvehicle ) ?? null,
            bookings: ( action.payload.bookings ) ?? state.bookings,
          };
        }
        default:
          return state;
      }
    };