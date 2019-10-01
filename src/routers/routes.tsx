import * as React from "react";
import { Route, Switch, Redirect } from "react-router";
import HomePage from "../components/HomePage";
import QuestionList from "../components/QuestionList";
import ToSelectQuestion from "../components/ToSelectQuestion";
import SelectedQuestion from "../components/SelectedQuestion";
import AddDeleteQuestion from "../components/AddDeleteQuestion";
import ChosenNumber from "../components/ChosenNumber";
import ShowResults from "../components/ShowResults";

export const Routes = () => (
  <Switch>
    <Route exact path={"/"} component={HomePage} />
    <Route exact path={"/ShowResults"} component={ShowResults} />
    <Route path={"/QuestionList"} component={QuestionList} />
    <Route path={"/ToSelectQuestion"} component={ToSelectQuestion} />
    <Route path={"/SelectedQuestion"} component={SelectedQuestion} />
    <Route path={"/AddDeleteQuestion"} component={AddDeleteQuestion} />
    <Route path={"/ChosenNumber"} component={ChosenNumber} />
    <Redirect to={"/"} />
  </Switch>
);
