import React, { Component, Dispatch } from "react";
import { Link } from "react-router-dom";
import { Question } from "../models/Question";
import { AppState } from "../store";
import { Action } from "redux";
import { fetchQuestions } from "../store/actions";
import { connect } from "react-redux";
import "../styles/HomePage.css";

interface Props {
  questions: Question[];
  fetchQuestions: Function;
}
interface State {}
class AppRoot extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.questions.length === 1) this.props.fetchQuestions();
  }
  render() {
    return (
      <div id="pocetna">
        <h2>Welcome to the QUIZ</h2>
        <ul>
          <li>
            <button id="navigacija">
              <Link to="/QuestionList">Go to quiz</Link>
            </button>
          </li>
          <li>
            <button id="navigacija">
              <Link to="/ToSelectQuestion">
                Go to get information about questions
              </Link>
            </button>
          </li>
          <li>
            <button id="navigacija">
              <Link to="/AddDeleteQuestion">
                Go to add new question or delete some
              </Link>
            </button>
          </li>
        </ul>
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
)(AppRoot);
