import React, { Component, Dispatch } from "react";
import { Question } from "../models/Question";
import { AppState } from "../store";
import { connect } from "react-redux";
import MojeDugme from "./Button";
import * as actions from "../store/actions";
import "../styles/QuestionList.css";
import { Action } from "redux";
import QuestionCounter from "./QuestionCounter";
import Popup from "./Forma";

interface Props {
  questions: Question[];
  fetchQuestions: Function;
  numberOfQuestions: number;
  flag: boolean;
}

interface State {
  id: number;
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  recently: number;
  score: number;
  showPopup: boolean;
  flagGame: boolean;
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
  showPopup: false,
  flagGame: false
};

class QuestionList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;

    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  componentDidMount() {
    if (this.props.questions.length === 0) {
      this.props.fetchQuestions();
    }
    this.pushData(this.state.recently);
  }

  nextQuestion() {
    if (this.props.numberOfQuestions === undefined) {
      if (this.state.recently === this.props.questions.length) {
        this.togglePopup();
      } else {
        this.pushData(this.state.recently);
      }
    } else {
      if (this.state.recently === this.props.numberOfQuestions) {
        this.togglePopup();
      } else {
        this.pushData(this.state.recently);
      }
    }
  }

  handleIncreaseScore() {
    this.setState({
      score: this.state.score + 1
    });
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  restartGame() {
    window.location.reload();
  }

  prikazi() {
    if (this.props.numberOfQuestions !== undefined) {
      return (
        <p className="result">
          {this.state.score} / {this.props.numberOfQuestions}
        </p>
      );
    } else
      return (
        <p className="result">
          {this.state.score} / {this.props.questions.length}
        </p>
      );
  }

  pushData(recently: number) {
    if (this.props.questions.length !== 0) {
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
  }

  callPopup() {
    if (this.state.showPopup) {
      if (this.props.numberOfQuestions === undefined) {
        return (
          <Popup
            score={this.state.score}
            maxScore={this.props.questions.length}
            closePopup={this.togglePopup} //closePopup = {this.togglePopup.bind(this)}
            restartGame={this.restartGame}
          />
        );
      } else {
        return (
          <Popup
            score={this.state.score}
            maxScore={this.props.numberOfQuestions}
            closePopup={this.togglePopup} //closePopup = {this.togglePopup.bind(this)}
            restartGame={this.restartGame}
          />
        );
      }
    }
  }

  render() {
    let { recently, question, answer1, answer2, answer3, answer4, id } = this.state;

    if (this.props.questions.length === 0) {
      return <h3>No questions</h3>;
    }

    return (
      <div className="maliDiv" key={id}>
        <p className="question">{question}</p>
        {this.prikazi()}
        <div id="dugmad">
          <MojeDugme
            increaseScore={this.handleIncreaseScore}
            question={this.props.questions[recently - 1]}
            naslov={answer1}
            flagGame={this.props.flag}
            togglePopup={this.togglePopup}
            answer="A"
          />
          <MojeDugme
            increaseScore={this.handleIncreaseScore}
            question={this.props.questions[recently - 1]}
            naslov={answer2}
            flagGame={this.props.flag}
            togglePopup={this.togglePopup}
            answer="B"
          />
          <MojeDugme
            increaseScore={this.handleIncreaseScore}
            question={this.props.questions[recently - 1]}
            naslov={answer3}
            flagGame={this.props.flag}
            togglePopup={this.togglePopup}
            answer="C"
          />
          <MojeDugme
            increaseScore={this.handleIncreaseScore}
            question={this.props.questions[recently - 1]}
            naslov={answer4}
            flagGame={this.props.flag}
            togglePopup={this.togglePopup}
            answer="D"
          />
        </div>
        <button className="next" onClick={() => this.nextQuestion()}>
          Next
        </button>

        <QuestionCounter />
        {/* proverava da li je showPopup true kako bi prikazao formu ili null */}

        {this.callPopup()}
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
    fetchQuestions: () => dispatch(actions.fetchQuestions())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionList);
