import { put, call, takeEvery, takeLatest, select, delay } from 'redux-saga/effects';
import { AUTH, restAction, API_CONTS, RESTHELPER_RESET, RESTHELPER_VALUE } from "../actions/constant";
import {getData , storeData, removeData } from '../actions/constant';

export const getPage = state => state.nextPage;



async function setUserData( authUserInit ) {
    await storeData("name", authUserInit.name);
    await storeData("number", authUserInit.number);
  }
  
  
  async function getUserToken(  ) {
    const authToken = await getData("name" );
    const authToken = await getData("number" );
  }

  export default function* EmergencyContactSaga() {
    yield takeEvery(AUTH.name, username);
    yield takeEvery(AUTH.number, usernumber);
    yield takeEvery(AUTH.LOGIN_VALID, loginValid);
  }
  
