import React, { Component } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";
class LeaderBoard extends Component {
  render() {
    const { usersSorted } = this.props;
    return usersSorted.map((id) => <UserCard id={id} key={id} />);
  }
}
function mapStateToProps({ users }) {
  const userList = Object.keys(users);
  const usersSorted = userList.sort(
    (a, b) =>
      Object.keys(users[b].answers).length +
      users[b].questions.length -
      (Object.keys(users[a].answers).length + users[a].questions.length),
  );
  return {
    usersSorted,
  };
}
export default connect(mapStateToProps)(LeaderBoard);
