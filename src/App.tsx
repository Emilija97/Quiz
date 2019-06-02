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

const sagaMiddleware = createSagaMiddleware();
const questionStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

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
