import { Question } from "../models/Question";
import { combineReducers } from "redux";
import { questionsReducer } from "./questions-reducer";
import { selectedQuestionReducer } from "./selected-question.reducer";
import { toSelectReducer } from "./toselect-reducer";
import { Result } from "../models/Result";
import { resultReducer } from "./result-reducer";

export interface AppState {
  questions: Question[];
  selected?: Question;
  questionList: Question[];
  results: Result[];
}

export const rootReducer = combineReducers({
  questions: questionsReducer,
  selected: selectedQuestionReducer,
  questionList: toSelectReducer,
  results: resultReducer
});
