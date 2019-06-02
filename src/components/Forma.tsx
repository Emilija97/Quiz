import React, { Component } from "react";
import "../styles/QuestionList.css";
import { Redirect } from "react-router";

interface Props {
  score: number;
  maxScore: number;
  closePopup: Function;
  restartGame: Function;
}

interface State {
  redirectH: boolean;
}

class Popup extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      redirectH: false
    };
  }

  setRedirectH = () => {
    this.setState({
      redirectH: true
    });
  };
  renderRedirectH = () => {
    if (this.state.redirectH) {
      return <Redirect to="/" />;
    }
  };
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
                this.props.restartGame();
                this.props.closePopup();
              }}
            >
              Back to play again quiz
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

export default Popup;
