import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import { authReducer }  from "../reducers/authReducer";
import { restReducer }  from "../reducers/restReducer";
import { countryReducer }  from "../reducers/countryReducer";
import { bookingReducer }  from "../reducers/bookingReducer";
import { usersReducer }  from "../reducers/usersReducer";
import { vehicleReducer } from "../reducers/vehicleReducer"




import authSaga from '../sagas/authSaga';
import countrySaga from '../sagas/countrySaga';
import bookingSaga from '../sagas/bookingSaga';
import usersSaga from '../sagas/usersSaga';
import vehicleSaga from '../sagas/vehicleSaga'


export const rootReducer = combineReducers({
	auth 	: authReducer,
	rest	: restReducer,
	country : countryReducer,
	booking : bookingReducer,
	vehicle : vehicleReducer,
	users	: usersReducer
});

export function* rootSaga() {
  yield all([ 
	  authSaga(),
	  countrySaga(),
	  bookingSaga(),
	  vehicleSaga(),
	  usersSaga()
  	]);
}
