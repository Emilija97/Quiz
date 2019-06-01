import { Question } from "../models/Question";
import { combineReducers } from "redux";
import { questionsReducer } from "./questions-reducer";
import { selectedQuestionReducer } from "./selected-question.reducer";

export interface AppState {
  questions: Question[];
  selected?: Question;
}

export const rootReducer = combineReducers({
  questions: questionsReducer,
  selected: selectedQuestionReducer
});
