import { Action } from "redux";
import { Question } from "../models/Question";
import { Result } from "../models/Result";

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
