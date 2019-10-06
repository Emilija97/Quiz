import { all, takeEvery, put, take } from "redux-saga/effects";
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
  DELETE_RESULT,
  LogIn,
  LOGIN,
  logInSuccess,
  logInFailure,
  CheckUser,
  checkUserSuccess,
  checkUserFailure,
  CHECK_USER,
  Register,
  REGISTER,
  registerFailure,
  registerSuccess
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
import {
  logInUser,
  getUserById,
  registerUser,
  getAllUsers
} from "../services/auth.service";
import { User } from "../models/User";
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

function* logIn(action: LogIn) {
  const username = action.username;
  const password = action.password;
  console.log(username + ": " + password);
  const res = yield logInUser(username, password);
  console.log(res);
  if (res.length > 0) {
    yield put(logInSuccess(res[0]));
  } else {
    yield put(logInFailure(res));
  }
}

function* checkUser(action: CheckUser) {
  const id = action.id;
  console.log("Logged user: " + id);
  if (id) {
    const res = yield getUserById(id);
    console.log(res);
    if (res) {
      console.log("Usao sam da pozovem success");
      yield put(checkUserSuccess(res));
    } else yield put(checkUserFailure("User is not logged"));
  }
}

function* register(action: Register) {
  const user = action.user;
  console.log(user);
  const res = yield getAllUsers();
  const obj = res.filter((us: User) => us.username === user.username);
  if (obj.length === 0) {
    yield registerUser(user);
    yield put(registerSuccess(user));
  } else {
    yield put(registerFailure("Username is already taken."));
  }
}

export function* rootSaga() {
  yield all([
    takeEvery(FETCH_QUESTIONS, fetchQuestions),
    takeEvery(FETCH_NUMQUESTIONS, fetchNumberOfQuestions),
    takeEvery(FETCH_NEW_QUESTION, fetchNewQuestion),
    takeEvery(DELETE_QUESTION_SAGA, deleteQuestionSaga),
    takeEvery(SAVE_RESULT, saveResult),
    takeEvery(FETCH_RESULTS, fetchResults),
    takeEvery(DELETE_RESULT, deleteResult),
    takeEvery(LOGIN, logIn),
    takeEvery(CHECK_USER, checkUser),
    takeEvery(REGISTER, register)
  ]);
}
