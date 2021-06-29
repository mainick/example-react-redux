import { takeEvery, call, put } from "redux-saga/effects"
import { TODO_REQUESTED, TODO_LOADED, API_ERRORED } from "./actions";

export default function* watcherSaga() {
  yield takeEvery(TODO_REQUESTED, workerSaga);
}

function* workerSaga(action) {
  try {
    const payload = yield call(getTodo, action.payload.url);
    yield put({ type: TODO_LOADED, payload })
  }
  catch (e) {
    yield put({ type: API_ERRORED, payload: e })
  }
}

function getTodo(url) {
  return fetch(url)
    .then(response => response.json())
}