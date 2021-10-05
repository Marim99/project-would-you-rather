import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import QuestionsList from "./QuestionsList";
import CardDetails from "./CardDetails";
import LeaderBoard from "./LeaderBoard";
import NotFound from "./NotFound";
import CreateQuestion from "./CreateQuestion";
class Home extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={QuestionsList} />
          <Route path="/questions/:id" component={CardDetails} />
          <Route path="/leaderboard" component={LeaderBoard} />
          <Route path="/createquestion" component={CreateQuestion} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Home;
