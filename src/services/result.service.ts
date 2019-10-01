import { Result } from "../models/Result";
import { env } from "../App";

export function postNewResult(result: Result) {
  return fetch(`${env.url}/results`, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      date: result.date,
      score: result.score
    })
  })
    .then(response => response.json())
    .then(() =>
      console.log("Dodat rezultat u bazu: " + result.score + ", datum: " + result.date)
    )
    .catch(error => console.log(error));
}

export function getAllResults() {
  return fetch(`${env.url}/results`)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export function deleteResultById(resultId: number) {
  return fetch(`${env.url}/results/${resultId}`, {
    method: "DELETE"
  }).then(response => response.json());
}
