import { Action } from "redux";
import { SELECT_QUESTION, SelectQuestion } from "./actions";
import { AppState } from ".";
import { Question } from "../models/Question";

const initialState: Question = {
  id: 10,
  question: "List kog drveta se nalazi na zastavi Kanade?",
  answer1: "Javor",
  answer2: "Hrast",
  answer3: "Kesten",
  answer4: "Ginko",
  correctAnswer: "Javor"
};

export function selectedQuestionReducer(
  state: Question = initialState,
  action: Action
) {
  switch (action.type) {
    case SELECT_QUESTION: {
      const { question } = action as SelectQuestion;
      return question;
    }
    default:
      return state;
  }
}
