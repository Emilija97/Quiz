import React, { Component } from "react";
import { Color } from "csstype";
import { Question } from "../models/Question";
import "../styles/QuestionList.css";

interface Props {
  naslov: string;
  question: Question;
  increaseScore: Function;
}

interface State {
  boja: Color;
  disabled: boolean;
}

class MojeDugme extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      boja: "white",
      disabled: false
    };
  }

  componentWillReceiveProps() {
    //svaki put kad primi novi question, treba da se uhvati ta promena
    this.setState({
      boja: "white"
    });
  }

  render() {
    return (
      <button
        disabled={this.state.disabled}
        className="dugme"
        style={{ backgroundColor: this.state.boja }}
        onClick={() => {
          this.checkAnswer();
        }}
      >
        {this.props.naslov}
      </button>
    );
  }

  checkAnswer = () => {
    if (this.props.question.correctAnswer === this.props.naslov) {
      this.props.increaseScore();
      this.setState({
        boja: "green",
        disabled: true
      });
    } else {
      this.setState({ boja: "red", disabled: true });
    }
  };
}

export default MojeDugme;
