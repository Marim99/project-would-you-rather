import React, { Component, Fragment } from "react";
import { Image, Badge, Row, Button } from "react-bootstrap";
import { Card } from "react-bootstrap/cjs";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class QuestionCard extends Component {
  test = (e, id) => {
    e.preventDefault();
    this.props.history.push({ pathname: `/questions/${id}` });
  };
  render() {
    const { question, author, id } = this.props;
    const { optionOne, optionTwo } = question;
    const { name, avatarURL } = author;
    return (
      <Fragment>
        <Row xs={1} md={3} className="g-4">
          <div className="col col-md-4">
            <div className="card bg-secondary text-white">
              <h3 className="card-title">{name}</h3>
              <Image
                style={{
                  width: "75px",
                  height: "130px",
                  backgrounColor: "#fff",
                }}
                rounded
                src={avatarURL !== "undefined" ? avatarURL : "logo"}
              />
            </div>
          </div>
          <div className="col col-md-4">
            {
              <div className="card" style={{ padding: "15px" }}>
                <h2
                  className="card-title"
                  style={{ fontSize: "25px", fontWeight: "bold" }}
                >
                  Would you rather <Badge bg="secondary">!</Badge>
                </h2>
                <div className="card-body text-muted">{optionOne.text}</div>
                <div>
                  <Badge bg="dark" style={{ borderRadius: "50%" }}>
                    OR
                  </Badge>
                </div>
                <div className="card-body text-muted">{optionTwo.text}</div>
                <Button variant="dark" onClick={(e) => this.test(e, id)}>
                  <Card.Link
                    to={`/questions/${id}`}
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    {" "}
                    Open
                  </Card.Link>
                </Button>
              </div>
            }
          </div>
        </Row>
      </Fragment>
    );
  }
}
function mapStateToProps({ questions, users, authedUser }, { id }) {
  const question = questions[id];
  const author = users[question.author];
  return {
    author,
    question,
    authedUser,
  };
}
export default withRouter(connect(mapStateToProps)(QuestionCard));
