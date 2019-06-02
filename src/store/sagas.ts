import { all, takeEvery, put } from "redux-saga/effects";
import { FETCH_QUESTIONS, addQuestions } from "./actions";
import { getAllQuestions } from "../services/question.service";

function* fetchQuestions() {
  const questions = yield getAllQuestions();
  yield put(addQuestions(questions));
}

export function* rootSaga() {
  yield all([takeEvery(FETCH_QUESTIONS, fetchQuestions)]);
}
