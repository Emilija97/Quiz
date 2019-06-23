import React, { Component, Dispatch } from "react";
import { Question } from "../models/Question";
import { AppState } from "../store";
import { connect } from "react-redux";
import { Action } from "redux";
import { fetchQuestions } from "../store/actions";
import QuestionCounter from "./QuestionCounter";
import QuestionList from "./QuestionList";
import { Redirect } from "react-router";
import "../styles/QuestionList.css";

interface Props {
  questions: Question[];
  fetchQuestions: Function;
}

interface State {
  number: number;
  id: number;
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correctAnswer: string;
  redirect: boolean;
  showQuestionList: boolean;
}
const initialState = {
  number: 1,
  id: 0,
  question: "",
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
  correctAnswer: "",
  redirect: false,
  showQuestionList: false
};
class ChosenNumber extends Component<Props, State> {
  state = initialState;

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/QuestionList" />;
    }
  };

  nextAction() {
    this.setState({
      showQuestionList: !this.state.showQuestionList
    });
  }
  componentDidMount() {
    //da ne bi doslo do ucitavanja istih pitanja vise puta, nego da moze sa bilo koje stranice
    if (this.props.questions.length === 1) this.props.fetchQuestions();
  }
  render() {
    if (!this.props.questions) {
      return <h1>There isn't any question to choose!</h1>;
    }
    return (
      <div id="chForma">
        {this.renderRedirect()}
        <h3>Chose number of question:</h3>
        <form>
          <label>Number of questions: </label>
          <input
            type="number"
            name="number"
            min={1}
            max={this.props.questions.length}
            value={this.state.number}
            onChange={e =>
              this.setState({
                number:
                  e.target.valueAsNumber > this.props.questions.length
                    ? this.props.questions.length
                    : e.target.valueAsNumber
              })
            }
          />
        </form>
        <button
          className="next"
          onClick={() => {
            // this.setRedirect();
            this.nextAction();
          }}
        >
          Next
        </button>
        <QuestionCounter />
        {this.state.showQuestionList ? (
          <QuestionList flag={true} numberOfQuestions={this.state.number} />
        ) : null}
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
    fetchQuestions: () => dispatch(fetchQuestions())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChosenNumber);
