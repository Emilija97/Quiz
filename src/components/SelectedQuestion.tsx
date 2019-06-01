import React, { Component, Dispatch } from "react";
import { AppState } from "../store";
import { Action } from "redux";
import { connect } from "react-redux";
import { Question } from "../models/Question";
import "../styles/ToSelectQuestion.css";

interface Props {
  selectedQuestion?: Question;
}

interface State {}

class SelectedQuestion extends Component<Props, State> {
  render() {
    console.log("Usao sam u render u selectedQuestion");
    if (!this.props.selectedQuestion) {
      return <p>Selektovano pitanje: -</p>;
    }
    return (
      <div>
        <p className="response">
          Odgovor na selektovano pitanje:{" "}
          {this.props.selectedQuestion.correctAnswer}
        </p>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    // prop name <= store slice
    selectedQuestion: state.selected
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
)(SelectedQuestion);
