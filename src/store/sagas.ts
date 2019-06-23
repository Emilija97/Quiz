import { all, takeEvery, put } from "redux-saga/effects";
import {
  FETCH_QUESTIONS,
  addQuestions,
  FETCH_NUMQUESTIONS,
  addNumQuestions
} from "./actions";
import {
  getAllQuestions,
  getNumberOfQuestions
} from "../services/question.service";
let offset = 0;

function* fetchQuestions() {
  const questions = yield getAllQuestions();
  yield put(addQuestions(questions));
}

function* fetchNumberOfQuestions() {
  const questionList = yield getNumberOfQuestions(offset);
  yield put(addNumQuestions(questionList));
  offset += 10;
}
export function* rootSaga() {
  yield all([
    takeEvery(FETCH_QUESTIONS, fetchQuestions),
    takeEvery(FETCH_NUMQUESTIONS, fetchNumberOfQuestions)
  ]);
}
