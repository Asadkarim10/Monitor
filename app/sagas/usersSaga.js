import { put, call, takeEvery, takeLatest, select, delay } from 'redux-saga/effects';

import { USERS, API_CONTS } from "../actions/constant";
import { setusers } from "../actions/usersAction";

import { callAPI } from '../api';

export const getPage = state => state.nextPage;

export function* getpassenngerFunc(action) {
    try {
        const PostData = yield call(callAPI, API_CONTS.GETPASSENGER, 'get');
        if (PostData.return === true) {
            yield put(setusers({
                passenger: PostData.data
            }));
        }
    } catch (error) {

    }
}

export function* getdoctorFunc(action) {
    try {
        const PostData = yield call(callAPI, API_CONTS.GETDOCTOR, 'get');
        if (PostData.return === true) {
            yield put(setusers({
                doctor: PostData.data
            }));
        }
    } catch (error) {

    }
}
export function* getpaymentFunc(action) {
    try {
        const PostData = yield call(callAPI, API_CONTS.GETPAYMENT, 'get');
        if (PostData.return === true) {
            yield put(setusers({
                payments: PostData.data
            }));
        }
    } catch (error) {

    }
}

export default function* usersSaga() {
    yield takeEvery(USERS.GETPASSENGER, getpassenngerFunc);
    yield takeEvery(USERS.GETDOCTOR, getdoctorFunc);
    yield takeEvery(USERS.GETPAYMENT, getpaymentFunc);
}
