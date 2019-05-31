import React, { Component, Dispatch } from "react";
import { AppState } from "../store";
import { Action } from "redux";
import { connect } from "react-redux";
import { Question } from "../models/Question";

interface Props {
  questions?: Question[];
}

interface State {}

class QuestionCounter extends Component<Props, State> {
  render() {
    if (!this.props.questions) {
      return <p>Total Questions: 0</p>;
    }
    return (
      <div>
        <p>Total Questions: {this.props.questions.length}</p>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    // prop name <= store slice
    questions: state.questions
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    // prop name => dispatch action
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionCounter);
