import { EMERGENCYCONTACT   } from "../actions/constant";

const  initialAuthState = {
    name:  [] ,
    currentname: null,
    number:  [] ,
    currentnumber: null,
};

export const emergencycontactReducer = (state = initialAuthState, action) => {
      switch (action.type) {
        case NAME.NAME_VALUE: {
          return {
            ...state,
            name: ( action.payload.name ) ?? state.name,
            currentname: ( action.payload.currentname ) ?? state.currentname
          };
        }
        default:
          return state;
      }

      switch (action.type) {
        case NUMBER.NUMBER_VALUE: {
          return {
            ...state,
            number: ( action.payload.number ) ?? state.number,
            currentnumber: ( action.payload.currentnumber ) ?? state.currentnumber
          };
        }
        default:
          return state;
      }
    };
