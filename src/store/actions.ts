import { Action } from "redux";
import { Question } from "../models/Question";
import { Result } from "../models/Result";
import { User } from "../models/User";

export const FETCH_QUESTIONS = "FETCH QUESTIONS";
export const ADD_QUESTIONS = "ADD QUESTIONS";
export const SELECT_QUESTION = "SELECT QUESTION";
export const ADD_QUESTION = "ADD QUESTION";
export const FETCH_NUMQUESTIONS = "FETCH NUMQUESTIONS";
export const ADD_NUMQUESTIONS = "ADD NUMQUESTIONS";
export const FETCH_NEW_QUESTION = "FETCH NEW QUESTION";
export const DELETE_QUESTION_SAGA = "DELETE QUESTION SAGA";
export const DELETE_QUESTION = "DELETE QUESTION";

export const SAVE_RESULT = "SAVE RESULT";
export const SAVE_RESULT_SUCCESS = "SAVE RESULT SUCCESS";
export const FETCH_RESULTS = "FETCH RESULTS";
export const ADD_RESULTS = "ADD RESULTS";
export const DELETE_RESULT = "DELETE RESULT";
export const DELETE_RESULT_SUCCESS = "DELETE RESULT SUCCESS";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN SUCCESS";
export const LOGIN_FAILURE = "LOGIN FAILURE";
export const CHECK_USER = "CHECK USER";
export const CHECK_USER_SUCCESS = "CHECK USER SUCCESS";
export const CHECK_USER_FAILURE = "CHECK USER FAILURE";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER SUCCESS";
export const REGISTER_FAILURE = "REGISTER FAILURE";

export interface FetchQuestions extends Action {}
export interface AddQuestions extends Action {
  questions: Question[];
}
export interface SelectQuestion extends Action {
  question: Question;
}
export interface AddQuestion extends Action {
  question: Question;
}
export interface DeleteQuestion extends Action {
  questionId: number;
}
export interface DeleteQuestionSaga extends Action {
  questionId: number;
}
export interface FetchNumberOfQuestions extends Action {}
export interface FetchNewQuestion extends Action {
  question: Question;
}
export interface AddNumQuestions extends Action {
  questionList: Question[];
}

export interface SaveResult extends Action {
  result: Result;
}
export interface SaveResultSuccess extends Action {
  result: Result;
}

export interface FetchResults extends Action {}
export interface AddResults extends Action {
  results: Result[];
}

export interface DeleteResult extends Action {
  resultId: number;
}
export interface DeleteResultSuccess extends Action {
  resultId: number;
}

export interface LogIn extends Action {
  username: string;
  password: string;
}

export interface LogInSuccess extends Action {
  user: User;
}
export interface LogInFailure extends Action {
  errorMessage: string;
}

export interface CheckUser extends Action {
  id: string;
}
export interface CheckUserSuccess extends Action {
  user: User;
}
export interface CheckUserFailure extends Action {
  errorMessage: string;
}

export interface Register extends Action {
  user: User;
}
export interface RegisterSuccess extends Action {
  user: User;
}
export interface RegisterFailure extends Action {
  errorMessage: string;
}
export interface LogOut extends Action {}
export function fetchQuestions(): FetchQuestions {
  return {
    type: FETCH_QUESTIONS
  };
}
export function addQuestions(questions: Question[]): AddQuestions {
  return {
    type: ADD_QUESTIONS,
    questions: questions
  };
}
export function selectQuestion(question: Question): SelectQuestion {
  return {
    type: SELECT_QUESTION,
    question: question
  };
}
export function addQuestion(question: Question): AddQuestion {
  return {
    type: ADD_QUESTION,
    question
  };
}
export function deleteQuestion(questionId: number): DeleteQuestion {
  return {
    type: DELETE_QUESTION,
    questionId
  };
}
export function deleteQuestionSaga(questionId: number): DeleteQuestionSaga {
  return {
    type: DELETE_QUESTION_SAGA,
    questionId
  };
}
export function fetchNumberOfQuestions(): FetchNumberOfQuestions {
  return {
    type: FETCH_NUMQUESTIONS
  };
}
export function addNumQuestions(questionList: Question[]): AddNumQuestions {
  return {
    type: ADD_NUMQUESTIONS,
    questionList
  };
}

export function fetchNewQuestion(question: Question): FetchNewQuestion {
  return {
    type: FETCH_NEW_QUESTION,
    question
  };
}

export function saveResult(result: Result): SaveResult {
  return {
    type: SAVE_RESULT,
    result
  };
}
export function saveResultSuccess(result: Result): SaveResultSuccess {
  return {
    type: SAVE_RESULT_SUCCESS,
    result
  };
}

export function fetchResults(): FetchResults {
  return {
    type: FETCH_RESULTS
  };
}
export function addResults(results: Result[]): AddResults {
  return {
    type: ADD_RESULTS,
    results
  };
}

export function deleteResult(resultId: number): DeleteResult {
  return {
    type: DELETE_RESULT,
    resultId
  };
}
export function deleteResultSuccess(resultId: number): DeleteResultSuccess {
  return {
    type: DELETE_RESULT_SUCCESS,
    resultId
  };
}

export function logIn(username: string, password: string): LogIn {
  return {
    type: LOGIN,
    username,
    password
  };
}

export function logInSuccess(user: User): LogInSuccess {
  return {
    type: LOGIN_SUCCESS,
    user
  };
}

export function logInFailure(errorMessage: string): LogInFailure {
  return {
    type: LOGIN_FAILURE,
    errorMessage
  };
}

export function checkUser(id: string): CheckUser {
  return {
    type: CHECK_USER,
    id
  };
}

export function checkUserSuccess(user: User): CheckUserSuccess {
  return {
    type: CHECK_USER_SUCCESS,
    user
  };
}
export function checkUserFailure(errorMessage: string): CheckUserFailure {
  return {
    type: CHECK_USER_FAILURE,
    errorMessage
  };
}
export function logOut(): LogOut {
  return {
    type: LOGOUT
  };
}

export function register(user: User): Register {
  return {
    type: REGISTER,
    user
  };
}

export function registerSuccess(user: User): RegisterSuccess {
  return {
    type: REGISTER_SUCCESS,
    user
  };
}

export function registerFailure(errorMessage: string): RegisterFailure {
  return {
    type: REGISTER_FAILURE,
    errorMessage
  };
}
