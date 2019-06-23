import React, { Component, Dispatch } from "react";
import { Question } from "../models/Question";
import { AppState } from "../store";
import { connect } from "react-redux";
import { selectQuestion } from "../store/actions";
import { Action } from "redux";
import * as actions from "../store/actions";
import "../styles/ToSelectQuestion.css";
import { Redirect } from "react-router";

interface Props {
  questionList: Question[];
  fetchNumberOfQuestions: Function;
  selectQuestion: Function;
}

interface State {
  id: number;
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correctAnswer: string;
  redirect: boolean;
}
const initialState = {
  id: -1,
  question: "",
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
  correctAnswer: "",
  redirect: false
};
class ToSelectQuestion extends Component<Props, State> {
  state = initialState;

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/SelectedQuestion" />;
    }
  };

  componentDidMount() {
    if (this.props.questionList.length === 1)
      this.props.fetchNumberOfQuestions();
  }

  render() {
    if (!this.props.questionList) {
      return <h1>There isn't any question to select!</h1>;
    }
    return (
      <div id="select">
        {this.renderRedirect()}
        <h3>Get information what is correct answer on some question:</h3>
        <ol>
          {this.props.questionList.map((question: Question) => (
            <li key={question.id}>
              <p className="selectP">{question.question} </p>
              <button
                className="dugmeSelect"
                onClick={() => {
                  this.props.selectQuestion(question);
                  this.setRedirect();
                }}
              >
                Select
              </button>
            </li>
          ))}
        </ol>
        <button
          className="dugmeLoad"
          onClick={() => {
            this.props.fetchNumberOfQuestions();
          }}
        >
          Load more questions
        </button>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    questionList: state.questionList
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    selectQuestion: (question: Question) => dispatch(selectQuestion(question)),
    fetchNumberOfQuestions: () => dispatch(actions.fetchNumberOfQuestions())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToSelectQuestion);
