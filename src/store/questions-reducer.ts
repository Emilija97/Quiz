import { Question } from "../models/Question";
import { Action } from "redux";
import { ADD_QUESTIONS, AddQuestions } from "./actions";

const initialState: Question[] = [
  {
    id: 10,
    question: "List kog drveta se nalazi na zastavi Kanade?",
    answer1: "Javor",
    answer2: "Hrast",
    answer3: "Kesten",
    answer4: "Ginko",
    correctAnswer: "Javor"
  }
];

export function questionsReducer(
  state: Question[] = initialState,
  action: Action
) {
  switch (action.type) {
    case ADD_QUESTIONS: {
      console.log("Sad sam u reduceru");
      const { questions } = action as AddQuestions;
      questions.sort(function() {
        return 0.5 - Math.random();
      });
      console.log("Iz reducer-a " + questions.length);
      return [...state, ...questions];
    }
    default: {
      console.log("Sad sam u reduceru default");
      return state;
    }
  }
}
