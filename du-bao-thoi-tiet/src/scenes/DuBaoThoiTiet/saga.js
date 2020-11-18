import { call, put, takeLatest, race, all, select } from "redux-saga/effects";
import { REQUEST_GET_DATA_START, SEARCH_LOCAL_START } from "./ActiveType";
import thoitietServices from "./services";
import { getDataComplete, getDataError, searchLocalComplete, searchLocalError } from "./actions";
import { makeSelectAddress, makeSelectLocalSearch } from "./selectors";

export default function* watchThoiTiet() {
  yield all([
    yield takeLatest(REQUEST_GET_DATA_START, getData),
    // yield takeLatest(SEARCH_LOCAL_START, searchLocal),
  ]);
}
function* getData() {
  try {
    const local = yield select(makeSelectAddress);
    const output = yield race({
      output: call(thoitietServices.get, local),
    });
    console.log(output);
    if (output) {
      yield put(getDataComplete(output));
    } else {
      yield put(getDataError(output));
    }
  } catch (error) {
    console.log(error);
    yield put(getDataError("Loi Roi Try-catch"));
  }
}
function* searchLocal() {
  try {
    const local = yield select(makeSelectLocalSearch);
    const output = yield race({
      output: call(thoitietServices.search, local),
    });
    if (output) {
      yield put(searchLocalComplete(output));
    } else {
      yield put(searchLocalError(output));
    }
  } catch (error) {
    yield put(searchLocalError("Loi Roi Try-catch"));
  }
}
