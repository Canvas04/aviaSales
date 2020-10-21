import { takeEvery, put, call } from "redux-saga/effects";
import { LOAD_SEARCH_ID,putSearchId } from "../action";

const aviaSalesUrl = "https://front-test.beta.aviasales.ru/search";
const fetchSearchId = () => {
  return fetch(aviaSalesUrl).then((response) => response.json());
};

function* workerSearchId() {
  const searchId = yield call(fetchSearchId);

  yield put(putSearchId(searchId));
}

export function* watchSearchId() {
  yield takeEvery(LOAD_SEARCH_ID, workerSearchId);
}
