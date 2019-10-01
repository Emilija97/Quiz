import React, { Component, Dispatch } from "react";
import "../styles/QuestionList.css";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { AppState } from "../store";
import { Action } from "redux";
import { Result } from "../models/Result";
import * as actions from "../store/actions";

interface Props {
  score: number;
  maxScore: number;
  closePopup: Function;
  restartGame: Function;
  saveResult: Function;
  fetchQuestions: Function;
}

interface State {
  redirectH: boolean;
  date: string;
}

class Popup extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      redirectH: false,
      date: "" //new Date().toString()
    };
  }

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    const time = new Date().toString();
    this.setState({ date: time });
  };

  setRedirectH = () => {
    this.setState({
      redirectH: true
    });
  };
  renderRedirectH = () => {
    if (this.state.redirectH) {
      return <Redirect to="/HomePage" />;
    }
  };
  closePopup() {
    window.history.back();
  }

  render() {
    return (
      <div className="popup">
        {this.renderRedirectH()}
        <div className="popup_inner">
          <h3 className="response">
            Well done, you finished the game with {this.props.score} points of{" "}
            {this.props.maxScore}!
          </h3>
          <h3>Choose your next action:</h3>

          <div className="formaBack">
            <button
              className="back"
              onClick={() => {
                const result: Result = {
                  id: Math.random() * 100,
                  date: this.state.date,
                  score: this.props.score
                };
                this.props.saveResult(result);
                this.closePopup();
              }}
            >
              Save this result
            </button>
            <button
              className="back"
              onClick={() => {
                this.setRedirectH();
              }}
            >
              Back to the home page
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    saveResult: (result: Result) => dispatch(actions.saveResult(result)),
    fetchQuestions: () => dispatch(actions.fetchQuestions())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);
