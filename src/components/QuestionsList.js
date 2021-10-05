import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";
import { Tab, Row, Col, Nav, ListGroup } from "react-bootstrap";
class QuestionsList extends Component {
  render() {
    const { unanswered, answered } = this.props;
    console.log(answered);
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row style={{ marginTop: "30px" }}>
          <Col sm={3}>
            <Nav
              variant="pills"
              className="flex-column"
              style={{ marginTop: "30px" }}
            >
              <Nav.Item>
                <Nav.Link variant="dark" eventKey="first">
                  unanswered
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link variant="dark" eventKey="second">
                  answered
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                {unanswered.map((id) => (
                  <ListGroup.Item
                    as="li"
                    key={id}
                    style={{ marginTop: "20px" }}
                  >
                    <QuestionCard id={id} isAnswerd={true} />
                  </ListGroup.Item>
                ))}
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                {answered.map((id) => (
                  <ListGroup.Item
                    as="li"
                    key={id}
                    style={{ marginTop: "20px" }}
                  >
                    <QuestionCard id={id} isAnswerd={false} />
                  </ListGroup.Item>
                ))}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}
function mapStateToProps({ authedUser, questions }) {
  const unanswered = Object.keys(questions)
    .filter(
      (i) =>
        !questions[i].optionOne.votes.includes(authedUser) &&
        !questions[i].optionTwo.votes.includes(authedUser),
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  const answered = Object.keys(questions)
    .filter(
      (i) =>
        questions[i].optionOne.votes.includes(authedUser) ||
        questions[i].optionTwo.votes.includes(authedUser),
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  return {
    unanswered,
    answered,
  };
}
export default connect(mapStateToProps)(QuestionsList);
