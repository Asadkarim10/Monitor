import { EMERGENCYMESSAGE   } from "../actions/constant";

const  initialAuthState = {
    booking:  [] ,
    currentbooking: null,
};

export const emergencymessageReducer = (state = initialAuthState, action) => {
      switch (action.type) {
        case EMERGENCYMESSAGE.EMERGENCYMESSAGE_VALUE: {
          return {
            ...state,
            emergencymessage: ( action.payload.emergencymessage ) ?? state.emergencymessage,
            currentemergencymessage: ( action.payload.currentemergencymessage ) ?? state.currentemergencymessage
          };
        }
        default:
          return state;
      }
    };
