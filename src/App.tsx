import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./store";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { Routes } from "./routers/routes";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./store/sagas";
import { checkUser } from "./store/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Home.css";

export const env = {
  url: "http://localhost:3001"
};

const sagaMiddleware = createSagaMiddleware();
const questionStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export function keepUser() {
  const token = localStorage.getItem("token");
  console.log(token);
  if (token) {
    questionStore.dispatch(checkUser(token));
  }
}

keepUser();

const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Provider store={questionStore}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
