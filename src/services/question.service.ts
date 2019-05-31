const url = "http://localhost:3001/questions";

export function getAllQuestions() {
  console.log("Usao sam u service");
  return fetch(url).then(response => response.json());
}
