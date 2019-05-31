import React, { Component, Dispatch } from "react";
import { Question } from "../models/Question";
import { AppState } from "../store";
import { connect } from "react-redux";
import MojeDugme from "./Button";
import * as actions from "../store/actions";
import "../styles/QuestionList.css";
import { Color } from "csstype";
import { Action } from "redux";

interface Props {
  questions: Question[];
  dispatch: any;
}

interface State {
  recently: number;
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  id: number;
  score: number;
  boja: Color;
}

const initialState = {
  id: -1,
  question: "",
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
  recently: 0,
  score: 0,
  boja: "white"
};

class QuestionList extends Component<Props, State> {
  state = initialState;
  constructor(props: Props) {
    super(props);

    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
  }

  handleIncreaseScore() {
    this.setState({
      score: this.state.score + 1,
      boja: "green"
    });
  }

  nextQuestion() {
    console.log("Sad sam u next");
    if (this.state.recently === this.props.questions.length) {
      alert(
        `Well done, you finished the game with ${
          this.state.score
        } points, your page will be automatically reloaded!`
      );
      this.restartGame();
    } else {
      this.pushData(this.state.recently);
    }
  }

  restartGame() {
    window.location.reload();
  }

  pushData(recently: number) {
    console.log("Sad sam u push");
    this.setState({
      question: this.props.questions[recently].question,
      answer1: this.props.questions[recently].answer1,
      answer2: this.props.questions[recently].answer2,
      answer3: this.props.questions[recently].answer3,
      answer4: this.props.questions[recently].answer4,
      id: this.props.questions[recently].id,
      recently: this.state.recently + 1
    });
  }

  componentDidMount() {
    let action = actions.fetchQuestions();
    this.props.dispatch(action);
    this.pushData(this.state.recently);
  }

  render() {
    let {
      recently,
      question,
      answer1,
      answer2,
      answer3,
      answer4,
      id
    } = this.state;

    if (!this.props.questions) {
      return <h1>No questions</h1>;
    }
    return (
      <div className="maliDiv" key={id}>
        <p>{question}</p>
        <p>
          {this.state.score}/{this.props.questions.length}
        </p>
        <div id="dugmad">
          <MojeDugme
            increaseScore={this.handleIncreaseScore}
            question={this.props.questions[recently - 1]}
            naslov={answer1}
          />
          <MojeDugme
            increaseScore={this.handleIncreaseScore}
            question={this.props.questions[recently - 1]}
            naslov={answer2}
          />
          <MojeDugme
            increaseScore={this.handleIncreaseScore}
            question={this.props.questions[recently - 1]}
            naslov={answer3}
          />
          <MojeDugme
            increaseScore={this.handleIncreaseScore}
            question={this.props.questions[recently - 1]}
            naslov={answer4}
          />
        </div>

        <button className="next" onClick={() => this.nextQuestion()}>
          Next
        </button>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    //prop name <= store slice
    questions: state.questions //parce state-a iz index.tsx se mapira na prop
  };
}

// function mapDispatchToProps(dispatch: Dispatch<Action>) {
//   return {};
// }

export default connect(
  mapStateToProps,
  null
)(QuestionList);
