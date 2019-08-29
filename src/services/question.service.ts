import { Question } from "../models/Question";

const url = "http://localhost:3001/questions";

export function getAllQuestions() {
  return fetch(url).then(response => response.json());
}

export function postNewQuestion(question: Question) {
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: question.id,
      question: question.question,
      answer1: question.answer1,
      answer2: question.answer2,
      answer3: question.answer3,
      answer4: question.answer4,
      correctAnswer: question.correctAnswer
    })
  }).then(response => response.json());
}

export function deleteQuestionFromApi(questionId: number) {
  console.log("Usao sam u service i moj id je: " + questionId);
  return fetch(`${url}/${questionId}`, {
    method: "DELETE"
  })
    .then(() => console.log("Deleted question with id: " + questionId))
    .catch(error => console.log(error));
}

export function getNumberOfQuestions(questionNumber: number) {
  return fetch(url)
    .then(response => response.json())
    .then(response =>
      response.slice(
        questionNumber === 0 ? questionNumber : questionNumber - 1,
        questionNumber + 9
      )
    );
}
