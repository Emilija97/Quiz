import * as React from "react";
import { Route, Switch, Redirect } from "react-router";
import HomePage from "../components/HomePage";
import QuestionList from "../components/QuestionList";

export const Routes = () => (
  <Switch>
    <Route exact path={"/"} component={HomePage} />
    <Route path={"/QuestionList"} component={QuestionList} />
    <Redirect to={"/"} />
  </Switch>
);
