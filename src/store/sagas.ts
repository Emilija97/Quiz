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
  deleteQuestion,
  SaveResult,
  saveResultSuccess,
  SAVE_RESULT,
  FetchResults,
  addResults,
  FETCH_RESULTS,
  DeleteResult,
  deleteResultSuccess,
  DELETE_RESULT
} from "./actions";
import {
  getAllQuestions,
  getNumberOfQuestions,
  postNewQuestion,
  deleteQuestionFromApi
} from "../services/question.service";
import {
  postNewResult,
  getAllResults,
  deleteResultById
} from "../services/result.service";
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
  yield postNewQuestion(question);
  yield put(addQuestion(question));
}

function* deleteQuestionSaga(action: DeleteQuestionSaga) {
  const questionId = action.questionId;
  yield deleteQuestionFromApi(questionId);
  yield put(deleteQuestion(questionId));
}

function* saveResult(action: SaveResult) {
  const result = action.result;
  yield postNewResult(result);
  yield put(saveResultSuccess(result));
}

function* fetchResults(action: FetchResults) {
  const results = yield getAllResults();
  yield put(addResults(results));
}

function* deleteResult(action: DeleteResult) {
  const resultId = action.resultId;
  yield deleteResultById(resultId);
  yield put(deleteResultSuccess(resultId));
}

export function* rootSaga() {
  yield all([
    takeEvery(FETCH_QUESTIONS, fetchQuestions),
    takeEvery(FETCH_NUMQUESTIONS, fetchNumberOfQuestions),
    takeEvery(FETCH_NEW_QUESTION, fetchNewQuestion),
    takeEvery(DELETE_QUESTION_SAGA, deleteQuestionSaga),
    takeEvery(SAVE_RESULT, saveResult),
    takeEvery(FETCH_RESULTS, fetchResults),
    takeEvery(DELETE_RESULT, deleteResult)
  ]);
}
