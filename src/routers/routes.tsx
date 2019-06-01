import * as React from "react";
import { Route, Switch, Redirect } from "react-router";
import HomePage from "../components/HomePage";
import QuestionList from "../components/QuestionList";
import ToSelectQuestion from "../components/ToSelectQuestion";
import SelectedQuestion from "../components/SelectedQuestion";
import AddDeleteQuestion from "../components/AddDeleteQuestion";

export const Routes = () => (
  <Switch>
    <Route exact path={"/"} component={HomePage} />
    <Route path={"/QuestionList"} component={QuestionList} />
    <Route path={"/ToSelectQuestion"} component={ToSelectQuestion} />
    <Route
      path={"/ToSelectQuestion/SelectedQuestion"}
      component={SelectedQuestion}
    />
    <Route path={"/AddDeleteQuestion"} component={AddDeleteQuestion} />
    <Redirect to={"/"} />
  </Switch>
);
