import { all, takeEvery, put } from "redux-saga/effects";
import { FETCH_QUESTIONS, addQuestions } from "./actions";
import { getAllQuestions } from "../services/question.service";
import { Question } from "../models/Question";

function* fetchQuestions() {
  console.log("Usao sam u fetchQuestions u sagas.ts");
  const questions = yield getAllQuestions();
  yield put(addQuestions(questions));
}

export function* rootSaga() {
  console.log("Usao sam u rootSaga u sagas.ts");
  yield all([takeEvery(FETCH_QUESTIONS, fetchQuestions)]);
}
