import { all, takeEvery, put } from "redux-saga/effects";
import {
  FETCH_QUESTIONS,
  addQuestions,
  FETCH_NUMQUESTIONS,
  addNumQuestions,
  addQuestion,
  FETCH_NEW_QUESTION,
  FetchNewQuestion,
  DeleteQuestionSaga,
  DELETE_QUESTION_SAGA,
  deleteQuestion
} from "./actions";
import {
  getAllQuestions,
  getNumberOfQuestions,
  postNewQuestion,
  deleteQuestionFromApi
} from "../services/question.service";
import { Question } from "../models/Question";
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

function* fetchNewQuestion(action: FetchNewQuestion) {
  const question = action.question;
  const questionList = yield postNewQuestion(question);
  yield put(addQuestion(question));
}

function* deleteQuestionSaga(action: DeleteQuestionSaga) {
  const questionId = action.questionId;
  const questionList = yield deleteQuestionFromApi(questionId);
  yield put(deleteQuestion(questionId));
}

export function* rootSaga() {
  yield all([
    takeEvery(FETCH_QUESTIONS, fetchQuestions),
    takeEvery(FETCH_NUMQUESTIONS, fetchNumberOfQuestions),
    takeEvery(FETCH_NEW_QUESTION, fetchNewQuestion),
    takeEvery(DELETE_QUESTION_SAGA, deleteQuestionSaga)
  ]);
}
