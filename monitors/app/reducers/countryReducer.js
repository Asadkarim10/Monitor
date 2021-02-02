
import { COUNTRYCITY  } from "../actions/constant";

const initialState = {
    city : []
};

export const countryReducer = (state = initialState , action ) => {
    switch (action.type) {
        case COUNTRYCITY.CITY_VALUE:
            const newState = {
                city: action.payload.city ?? state.city,
              };
            return newState ;
        default:
            return state;
    }
};