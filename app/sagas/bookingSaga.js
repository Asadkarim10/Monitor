import { put, call, takeEvery, takeLatest, select, delay } from 'redux-saga/effects';

import { BOOKING, API_CONTS , restAction} from "../actions/constant";
import { setbooking } from "../actions/bookingAction";

import { callAPI } from '../api';

export const getPage = state => state.nextPage;

export function* getbookingFunc(action) {
    try {
        if ( typeof action.payload.type === "undefined" ){
            const PostData = yield call(callAPI, API_CONTS.GETBOOKIG, 'post' , action.payload );

            yield put(setbooking({
                booking: PostData.data
            }));
            
        } else {
            const PostData = yield call(callAPI, API_CONTS.GETBOOKIG + "/" + action.payload.ID  , 'post' , action.payload );
            if (PostData.return === true) {
                yield put(setbooking({
                    currentbooking: PostData.data[0]
                }));
            }else {
                yield put(setbooking({
                    currentbooking: null
                }));
            }

        }

        yield put(restAction({
            IS_LOADING: false,
            RETURN: false,
            IS_RETURN: false,
            RETURN_MESSAGE: "Something wrong",
          }));
       
    } catch (error) {

    }
}

export default function* bookingSaga() {
    yield takeEvery(BOOKING.GETBOOKING, getbookingFunc);
}
