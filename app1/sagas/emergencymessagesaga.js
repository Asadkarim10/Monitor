import { put, call, takeEvery, takeLatest, select, delay } from 'redux-saga/effects';
import { AUTH, restAction, API_CONTS, RESTHELPER_RESET, RESTHELPER_VALUE } from "../actions/constant";
import {getData , storeData, removeData } from '../actions/constant';

export const getPage = state => state.nextPage;

async function setUserData( authUserInit ) {
    await storeData("EmergencyMessage", authUserInit.EmergencyMessage);
  }
  
  
  async function getUserToken(  ) {
    const authToken = await getData("EmergencyMessage" );
  }

  export default function* emergencymessageSaga() {
    yield takeEvery(AUTH.EmergencyMessage, EmergencyMessage);
  }
  
