const url = "http://localhost:3001/questions";

export function getAllQuestions() {
  return fetch(url).then(response => response.json());
}
