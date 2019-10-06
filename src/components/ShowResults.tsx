import React, { Component, Dispatch } from "react";
import { AppState } from "../store";
import { connect } from "react-redux";
import { fetchResults } from "../store/actions";
import { Action } from "redux";
import * as actions from "../store/actions";
import "../styles/ToSelectQuestion.css";
import { Redirect } from "react-router";
import { Result } from "../models/Result";

interface Props {
  results: Result[];
  fetchResults: Function;
  deleteResult: Function;
}

interface State {
  redirect: boolean;
}

class ShowResults extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      redirect: false
    };

    this.refreshPage = this.refreshPage.bind(this);
    this.refreshPage();
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/HomePage" />;
    }
  };

  refreshPage() {
    if (window.localStorage) {
      if (!localStorage.getItem("firstLoad")) {
        localStorage["firstLoad"] = true;
        window.location.reload();
      } else localStorage.removeItem("firstLoad");
    }
  }
  componentDidMount() {
    if (this.props.results.length === 0) this.props.fetchResults();
  }

  render() {
    if (!this.props.results) {
      return <h1>There isn't any result in database!</h1>;
    }
    return (
      <div id="select">
        {this.renderRedirect()}
        <h3>See achieved results in the quiz:</h3>
        <ol>
          {this.props.results.map((result: Result) => (
            <li key={result.id}>
              <h5>Date and Time of achieved result:</h5>
              <p className="showRes">{result.date} </p>
              <p className="showRes">Achieved result: {result.score} </p>
              <p className="showRes">Username: {result.username} </p>
              <button
                className="deleteButton"
                onClick={() => {
                  this.props.deleteResult(result.id);
                }}
              >
                Delete result
              </button>
            </li>
          ))}
        </ol>
        <button
          className="backHome"
          onClick={() => {
            this.setRedirect();
          }}
        >
          Back to the home page
        </button>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    results: state.results
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    fetchResults: () => dispatch(fetchResults()),
    deleteResult: (resultId: number) => dispatch(actions.deleteResult(resultId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowResults);
