import { put, call, takeEvery, takeLatest, select, delay } from 'redux-saga/effects';

import { CAR_RENT, API_CONTS , restAction} from "../actions/constant";
import { setcarrentvalue } from "../actions/vehicleAction";

import { callAPI } from '../api';

export const getPage = state => state.nextPage;


export function* getvehiclesFunc(action) {
    try {
        yield put(restAction({
            IS_LOADING: true,
            RETURN: false,
            IS_RETURN: false,
            RETURN_MESSAGE: "Something wrong",
          }));
          const stateIinit = {
            vehicles : []
          }
            const PostData = yield call(callAPI, API_CONTS.VEHICLES, 'get'  );
            if ( PostData.return === true ) {
                stateIinit.vehicles = PostData.posts
            }
            
          yield put(setcarrentvalue( stateIinit ));
           
        yield put(restAction({
            IS_LOADING: false,
            RETURN: false,
            IS_RETURN: false,
            RETURN_MESSAGE: "Something wrong",
          }));
       
    } catch (error) {

    }
}

export function* getsinglevehiclesFunc(action) {
    try {
        yield put(restAction({
            IS_LOADING: true,
            RETURN: false,
            IS_RETURN: false,
            RETURN_MESSAGE: "Something wrong",
          }));
          console.log( action)
          const stateIinit = {
            currentvehicle : []
          }
            const PostData = yield call(callAPI, API_CONTS.VEHICLE + "/" + action.payload.Id  , 'get'  );
            if ( PostData.return === true ) {
                stateIinit.currentvehicle = PostData.posts
            }
            
          yield put(setcarrentvalue( stateIinit ));
           
        yield put(restAction({
            IS_LOADING: false,
            RETURN: false,
            IS_RETURN: false,
            RETURN_MESSAGE: "Something wrong",
          }));
       
    } catch (error) {

    }
}


export function* getbookingsFunc(action) {
    try {
        yield put(restAction({
            IS_LOADING: true,
            RETURN: false,
            IS_RETURN: false,
            RETURN_MESSAGE: "Something wrong",
          }));
          const stateIinit = {
            bookings : []
          }
            const PostData = yield call(callAPI, API_CONTS.BOOKINGS , 'get'  );
            if ( PostData.return === true ) {
                stateIinit.bookings = PostData.posts
            }
            
          yield put(setcarrentvalue( stateIinit ));
           
        yield put(restAction({
            IS_LOADING: false,
            RETURN: false,
            IS_RETURN: false,
            RETURN_MESSAGE: "Something wrong",
          }));
       
    } catch (error) {

    }
}


export default function* vehicleSaga() {
    yield takeEvery(CAR_RENT.GETVEHICLES, getvehiclesFunc);
    yield takeEvery(CAR_RENT.GETSINGLEVEHICLE, getsinglevehiclesFunc);
    yield takeEvery(CAR_RENT.GETBOOKING, getbookingsFunc);
}
