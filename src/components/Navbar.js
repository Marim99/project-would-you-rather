import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Image } from "react-bootstrap";
import { logOut } from "../actions/authedUser";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
class Home extends Component {
  handleLogOut = (e) => {
    e.preventDefault();
    this.props.dispatch(logOut());
  };
  render() {
    const { authedUser, users } = this.props;
    const user = users[authedUser];
    return (
      <Navbar bg="dark" variant="dark" expand="md">
        <Container style={{ flexWrap: "nowrap" }}>
          <Navbar.Brand as={NavLink} to={"/"}>
            Would You ?
          </Navbar.Brand>
          <Nav className="me-auto" style={{ flexDirection: "row" }}>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/createquestion">
              New Question
            </Nav.Link>
            <Nav.Link as={NavLink} to="/leaderboard">
              Leader Board
            </Nav.Link>
            <Navbar.Toggle />
          </Nav>

          {authedUser ? (
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>Hello, {user.name}</Navbar.Text>
              <Image
                style={{
                  width: "25px",
                  height: "25px",
                  backgrounColor: "#fff",
                }}
                rounded
                src={user !== "undefined" ? user.avatarURL : "logo"}
              />
              <Nav.Link href="#pricing" onClick={this.handleLogOut}>
                Log Out
              </Nav.Link>
            </Navbar.Collapse>
          ) : (
            <div></div>
          )}
        </Container>
      </Navbar>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}
export default connect(mapStateToProps)(Home);
