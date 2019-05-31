import { Question } from "../models/Question";
import { combineReducers } from "redux";
import { questionsReducer } from "./questions-reducer";

export interface AppState {
  questions: Question[];
}

export const rootReducer = combineReducers({
  questions: questionsReducer
});
