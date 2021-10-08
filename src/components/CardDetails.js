import React, { Component } from "react";
import { connect } from "react-redux";
import { ProgressBar, Button, Form, Badge } from "react-bootstrap";
import { handleAddAnswer } from "../actions/questions";
import { Link } from "react-router-dom";
import { _getQuestions, _getUsers } from "../utils/_DATA";
import { receiveUsers } from "../actions/user";
import { receiveQuestions } from "../actions/questions";
import NotFound from "./NotFound";
import { withRouter } from "react-router-dom";
class CardDetails extends Component {
  state = {
    selected: "",
  };
  handleChange = (e) => {
    const selectedOption = e.currentTarget.value;
    this.setState(() => ({
      selected: selectedOption,
    }));
  };
  update = () => {
    _getQuestions().then((questions) =>
      this.props.dispatch(receiveQuestions(questions)),
    );
    _getUsers().then((users) => this.props.dispatch(receiveUsers(users)));
  };
  handleVote = (e) => {
    e.preventDefault();
    const { dispatch, authedUser, id } = this.props;
    const { selected } = this.state;
    this.props.history.push("/");
    if (selected !== null) {
      dispatch(
        handleAddAnswer({
          authedUser: authedUser,
          qid: id,
          answer: selected,
        }),
      );
    }
    this.update();
  };

  style = {
    height: "80px",
    marginBottom: "30px",
    marginTop: "20px",
    backgroundColor: "rgb(202 202 202)",
    border: "1px solid #eeeddd",
    borderRadius: "15px",
    justifyItems: "center",
    paddingTop: "8px",
  };
  render() {
    const { question, author, isError, authedUser } = this.props;
    if (isError) {
      return (
        <div>
          <NotFound />
        </div>
      );
    }
    const { optionOne, optionTwo } = question;
    const { name, avatarURL } = author;
    const numberVotesOne = optionOne.votes.length;
    const numberVotesTwo = optionTwo.votes.length;
    const totalVotes = numberVotesOne + numberVotesTwo;
    const PercentOne = Math.round((optionOne.votes.length / totalVotes) * 100);
    const PercentTwo = Math.round((optionTwo.votes.length / totalVotes) * 100);
    return (
      <div className="card">
        <div className="card-header" style={{ fontWeight: "bold" }}>
          <Button style={{ marginRight: "5px" }}>
            <Link
              to="/"
              style={{
                color: "#fff",
                textDecoration: "none",
                marginTop: "0px",
              }}
            >
              Back
            </Link>
          </Button>
          {name} Ask ?
        </div>

        <div
          className="card-Text"
          style={{
            justifyItems: "center",
            justifyContent: " center",
            display: "flex",
          }}
        >
          <Badge bg="secondary" style={{ fontSize: "30px", marginTop: "15px" }}>
            Would You Rather
          </Badge>
        </div>
        <div className="row">
          <div className="col col-md-4">
            <img src={avatarURL} className="card-img" alt={name} />
          </div>
          {this.props.isAnswered ? (
            <div className="col col-md-4">
              <div style={{ marginTop: "70px" }}>
                <div
                  style={
                    optionOne.votes.includes(authedUser) ? this.style : null
                  }
                >
                  <div className="card-Text" style={{ marginBottom: "10px" }}>
                    {optionOne.text}
                  </div>
                  <ProgressBar
                    progress="percent"
                    value={numberVotesOne}
                    now={PercentOne}
                    animated
                  />
                  <div className="card-Text" style={{ marginBottom: "10px" }}>
                    {numberVotesOne} from {totalVotes}
                  </div>
                </div>

                <div
                  style={
                    optionTwo.votes.includes(authedUser) ? this.style : null
                  }
                >
                  <div className="card-Text">{optionTwo.text}</div>
                  <div>
                    <ProgressBar
                      animated
                      progress="percent"
                      value={numberVotesOne}
                      now={PercentTwo}
                    />
                    <div className="card-Text" style={{ marginBottom: "10px" }}>
                      {numberVotesTwo} from {totalVotes}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="col col-md-4">
              <Form style={{ marginTop: "70px" }}>
                <Form.Check
                  type="radio"
                  label={optionOne.text}
                  name="optionOne"
                  id="optionOne"
                  value="optionOne"
                  checked={this.state.selected === "optionOne" ? true : false}
                  style={{ marginBottom: "30px" }}
                  onChange={this.handleChange}
                />
                <Form.Check
                  type="radio"
                  label={optionTwo.text}
                  name="optionTwo"
                  id="optionTwo"
                  value="optionTwo"
                  checked={this.state.selected === "optionTwo" ? true : false}
                  onChange={this.handleChange}
                />
                <Button
                  type="submit"
                  onClick={this.handleVote}
                  disabled={this.state.selected === ""}
                >
                  Vote
                </Button>
              </Form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  if (questions[props.match.params.id] === undefined) {
    const isError = true;
    return {
      isError,
    };
  }
  const id = props.match.params.id;
  const question = questions[id];
  const author = users[question.author];
  const isAnswered = !!question
    ? question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
    : false;

  const isError = false;
  return {
    id,
    isAnswered,
    author,
    question,
    authedUser,
    isError,
  };
}

export default withRouter(connect(mapStateToProps)(CardDetails));
