import React, { Component, Dispatch } from "react";
import { AppState } from "../store";
import { Action } from "redux";
import { connect } from "react-redux";
import { Question } from "../models/Question";
import "../styles/ToSelectQuestion.css";
import { Redirect } from "react-router";

interface Props {
  selectedQuestion?: Question;
}

interface State {
  redirect: boolean;
}

class SelectedQuestion extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/ToSelectQuestion" />;
    }
  };
  render() {
    if (!this.props.selectedQuestion) {
      return <p>Selektovano pitanje: -</p>;
    }
    return (
      <div>
        {this.renderRedirect()}
        <p className="response">
          Odgovor na pitanje: {this.props.selectedQuestion.question}{" "}
          {this.props.selectedQuestion.correctAnswer}
        </p>
        <button
          className="back"
          onClick={() => {
            this.setRedirect();
          }}
        >
          Back to select another question
        </button>
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
