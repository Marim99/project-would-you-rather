import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Badge } from "react-bootstrap";
class UserCard extends Component {
  styleAuthed = {
    color: "#000",
    backgroundColor: "#fff",
    borderBottom: "none",
  };
  styleNotAuthed = {
    color: "#999",
    backgroundColor: "#fff",
    borderBottom: "none",
  };
  render() {
    const { user } = this.props;
    const { name, avatarURL, answers, questions } = user;
    const answered = Object.keys(answers).length;
    const asked = questions.length;
    const sum = answered + asked;

    return (
      <div className="d-flex justify-content-center">
        <div
          className="card"
          style={{
            marginTop: "30px",
            width: "700px",
          }}
        >
          <div className="row">
            <h4
              className="card-header"
              //style={me ? this.styleAuthed : this.styleNotAuthed}
            >
              {name}
              {/*me && (
                <Badge style={{ marginLeft: "5px" }} bg="secondary">
                  You
                </Badge>
              )*/}
            </h4>

            <div className="col col-md-4">
              <Image
                style={{
                  width: "75px",
                  height: "130px",
                }}
                rounded
                src={avatarURL !== "undefined" ? avatarURL : "logo"}
              />
            </div>
            <div className="col col-md-4">
              <div className="card-text">
                Answered Questions: {answered}
                <br />
                <br />
                Created Questions: {asked}
              </div>
            </div>
            <div className="col col-md-4">
              <div
                className=""
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#0d6efd",
                  textAlign: "center",
                  padding: "30px",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Score {Object.keys(answers).length + questions.length}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ users, authedUser }, { id }) {
  const user = users[id];
  const me = user.id === authedUser;
  return {
    user,
    me,
  };
}

export default connect(mapStateToProps)(UserCard);
