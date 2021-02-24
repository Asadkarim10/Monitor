import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import { authReducer }  from "../reducers/authReducer";
import { restReducer }  from "../reducers/restReducer";
import { countryReducer }  from "../reducers/countryReducer";
import { bookingReducer }  from "../reducers/bookingReducer";
import { usersReducer }  from "../reducers/usersReducer";
import authSaga from '../sagas/authSaga';
import countrySaga from '../sagas/countrySaga';
import bookingSaga from '../sagas/bookingSaga';
import usersSaga from '../sagas/usersSaga';


export const rootReducer = combineReducers({
	auth 	: authReducer,
	rest	: restReducer,
	country : countryReducer,
	booking : bookingReducer,
	users	: usersReducer
});

export function* rootSaga() {
  yield all([ 
	  authSaga(),
	  countrySaga(),
	  bookingSaga(),
	  usersSaga()
  	]);
}
