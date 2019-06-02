import React, { Component, Dispatch } from "react";
import { Question } from "../models/Question";
import { AppState } from "../store";
import { connect } from "react-redux";
import { Action } from "redux";
import { fetchQuestions, addQuestion, deleteQuestion } from "../store/actions";
import "../styles/AddDelete.css";
import QuestionCounter from "./QuestionCounter";

interface Props {
  questions: Question[];
  fetchQuestions: Function;
  deleteQuestion: Function;
  addQuestion: Function;
}

interface State {
  id: number;
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correctAnswer: string;
}
const initialState = {
  id: 0,
  question: "",
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
  correctAnswer: ""
};
class AddDeleteQuestion extends Component<Props, State> {
  state = initialState;

  componentDidMount() {
    //da ne bi doslo do ucitavanja istih pitanja vise puta, nego da moze sa bilo koje stranice
    if (this.props.questions.length === 1) this.props.fetchQuestions();
  }
  render() {
    if (!this.props.questions) {
      return <h1>There isn't any question to delete!</h1>;
    }
    return (
      <div id="addDelete">
        <h3>Choose action, delete or add some question:</h3>
        <div id="izmene">
          <div id="deleteDiv">
            <h3>Delete question:</h3>
            <ul className="lista">
              {this.props.questions.map((question: Question) => (
                <li key={question.id}>
                  <p className="questionD">{question.question} </p>
                  <button
                    className="deleteBtn"
                    onClick={() => {
                      this.props.deleteQuestion(question.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div id="addDiv">
            <h3>Add question:</h3>
            <form>
              <label>Question id: </label>
              <input
                type="number"
                name="id"
                value={this.state.id}
                onChange={e => this.setState({ id: e.target.valueAsNumber })}
              />
              <label>Question: </label>
              <input
                type="text"
                name="question"
                value={this.state.question}
                onChange={e => this.setState({ question: e.target.value })}
              />
              <label>Answer 1: </label>
              <input
                type="text"
                name="answer1"
                value={this.state.answer1}
                onChange={e => this.setState({ answer1: e.target.value })}
              />
              <label>Answer 2: </label>
              <input
                type="text"
                name="answer2"
                value={this.state.answer2}
                onChange={e => this.setState({ answer2: e.target.value })}
              />
              <label>Answer 3: </label>
              <input
                type="text"
                name="answer3"
                value={this.state.answer3}
                onChange={e => this.setState({ answer3: e.target.value })}
              />
              <label>Answer 4: </label>
              <input
                type="text"
                name="answer4"
                value={this.state.answer4}
                onChange={e => this.setState({ answer4: e.target.value })}
              />
              <label>Correct answer: </label>
              <input
                type="text"
                name="correctanswer"
                value={this.state.correctAnswer}
                onChange={e => this.setState({ correctAnswer: e.target.value })}
              />
              <br />
            </form>
            <button
              className="addBtn"
              onClick={() => {
                const question: Question = {
                  id: this.state.id,
                  question: this.state.question,
                  answer1: this.state.answer1,
                  answer2: this.state.answer2,
                  answer3: this.state.answer3,
                  answer4: this.state.answer4,
                  correctAnswer: this.state.correctAnswer
                };
                this.props.addQuestion(question);
              }}
            >
              Add
            </button>
          </div>
        </div>
        <QuestionCounter />
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    questions: state.questions
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
    addQuestion: (question: Question) => dispatch(addQuestion(question)),
    deleteQuestion: (questionId: number) => dispatch(deleteQuestion(questionId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDeleteQuestion);
