const url = "http://localhost:3001/questions";

export function getAllQuestions() {
  return fetch(url).then(response => response.json());
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
