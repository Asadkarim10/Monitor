import { BOOKING   } from "../actions/constant";

const  initialAuthState = {
    booking:  [] ,
    earning:  [] ,
    currentbooking: null,
    totalAmount : 0
};

export const bookingReducer = (state = initialAuthState, action) => {
      switch (action.type) {
        case BOOKING.GETBOOKING_VALUE: {
          return {
            ...state,
            booking: ( action.payload.booking ) ?? state.booking,
            earning :  ( action.payload.earning ) ?? state.earning,
            currentbooking: ( action.payload.currentbooking ) ?? null,
            totalAmount: ( action.payload.totalAmount ) ?? state.totalAmount
          };
        }
        default:
          return state;
      }
    };
