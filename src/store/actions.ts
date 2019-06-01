import { Action } from "redux";
import { Question } from "../models/Question";

export const FETCH_QUESTIONS = "FETCH QUESTIONS";
export const ADD_QUESTIONS = "ADD QUESTIONS";
export const SELECT_QUESTION = "SELECT QUESTION";
export const ADD_QUESTION = "ADD QUESTION";
export const DELETE_QUESTION = "DELETE QUESTION";

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
