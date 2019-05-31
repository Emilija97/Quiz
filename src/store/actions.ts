import { Action } from "redux";
import { Question } from "../models/Question";

export const FETCH_QUESTIONS = "FETCH QUESTIONS";
export const ADD_QUESTIONS = "ADD QUESTIONS";

export interface FetchQuestions extends Action {}
export interface AddQuestions extends Action {
  questions: Question[];
}

export function fetchQuestions(): FetchQuestions {
  return {
    type: FETCH_QUESTIONS
  };
}
export function addQuestions(questions: Question[]): AddQuestions {
  console.log("Usao sam u add ");
  return {
    type: ADD_QUESTIONS,
    questions: questions
  };
}
