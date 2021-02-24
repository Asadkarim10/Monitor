import { BOOKING   } from "../actions/constant";

const  initialAuthState = {
    booking:  [] ,
    currentbooking: null,
};

export const bookingReducer = (state = initialAuthState, action) => {
      switch (action.type) {
        case BOOKING.GETBOOKING_VALUE: {
          return {
            ...state,
            booking: ( action.payload.booking ) ?? state.booking,
            currentbooking: ( action.payload.currentbooking ) ?? state.currentbooking
          };
        }
        default:
          return state;
      }
    };
