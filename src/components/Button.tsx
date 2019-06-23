import React, { Component } from "react";
import { Color } from "csstype";
import { Question } from "../models/Question";
import "../styles/QuestionList.css";

interface Props {
  naslov: string;
  question: Question;
  increaseScore: Function;
  flagGame: boolean;
  togglePopup: Function;
  answer: string;
}

interface State {
  disabled: boolean;
  boja: Color;
}

class MojeDugme extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      boja: "white",
      disabled: false
    };
  }

  render() {
    return (
      <button
        style={{ backgroundColor: this.state.boja }}
        disabled={this.state.disabled}
        className="dugme"
        onClick={() => {
          this.checkAnswer();
        }}
      >
        {this.props.naslov}
      </button>
    );
  }

  checkAnswer = () => {
    if (this.props.question.correctAnswer === this.props.answer) {
      this.props.increaseScore();
      this.setState({
        disabled: true,
        boja: "green"
      });
    } else if (this.props.flagGame === true) {
      this.setState({ boja: "red", disabled: true });
    } else {
      this.setState({ boja: "red", disabled: true });
      setTimeout(() => this.props.togglePopup(), 500);
    }
  };
}

export default MojeDugme;
