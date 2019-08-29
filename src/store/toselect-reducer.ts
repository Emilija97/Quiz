import { Action } from "redux";
import { ADD_NUMQUESTIONS, AddNumQuestions } from "./actions";
import { Question } from "../models/Question";

const initialState: Question[] = [
  {
    id: 100,
    question: "List kog drveta se nalazi na zastavi Kanade?",
    answer1: "Javor",
    answer2: "Hrast",
    answer3: "Kesten",
    answer4: "Ginko",
    correctAnswer: "A"
  }
];

export function toSelectReducer(
  state: Question[] = initialState,
  action: Action
) {
  switch (action.type) {
    case ADD_NUMQUESTIONS: {
      const { questionList } = action as AddNumQuestions;
      return [...state, ...questionList];
    }
    default:
      return state;
  }
}
