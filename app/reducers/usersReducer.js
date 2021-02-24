import { USERS   } from "../actions/constant";

const  initialAuthState = {
    passenger:  [] ,
    currentpassenger: null,
    doctor : [],
    currentdoctor: null,
    payments : [],
    currentpayments: null,
    notifications: [],

};

export const usersReducer = (state = initialAuthState, action) => {
      switch (action.type) {
        case USERS.SETUSERS_VALUE: {
          return {
            ...state,
            passenger: ( action.payload.passenger ) ?? state.passenger,
            currentpassenger: ( action.payload.currentpassenger ) ?? state.currentpassenger,
            doctor: ( action.payload.doctor ) ?? state.doctor,
            currentdoctor: ( action.payload.currentdoctor ) ?? state.currentdoctor,
            payments: ( action.payload.payments ) ?? state.payments,
            currentpayments: ( action.payload.currentpayments ) ?? state.currentpayments,
            notifications: ( action.payload.notifications ) ?? state.notifications
          };
        }
        default:
          return state;
      }
    };
