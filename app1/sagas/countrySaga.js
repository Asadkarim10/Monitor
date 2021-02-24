import { put, call, takeEvery } from 'redux-saga/effects';

import { COUNTRYCITY , API_CONTS } from "../actions/constant";
import {setcity } from "../actions/countryAction";

import { callAPI } from '../api';

export const getPage = state => state.nextPage;

export function* cityFunc(action) {
  try {
    const PostData = yield call(callAPI, API_CONTS.GETCITY, 'get');
    if ( PostData.return === true  ){
      yield put(setcity({
        city: PostData.data
      }));
    }
  } catch (error) {
   
  }
}

export default function* countrySaga() {
  yield takeEvery(COUNTRYCITY.CITY, cityFunc );
}
