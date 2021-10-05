import React from "react";
import { setAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Image, Form } from "react-bootstrap";

class SignupForm extends React.Component {
  /* state={
        userID:null
    }*/
  handleChange = (user) => {
    this.setState({ user });
    console.log(user);
  };

  handleSubmit = (e) => {
    const userID = this.userID.value;
    const { dispatch } = this.props;

    e.preventDefault();

    if (userID !== "") {
      dispatch(setAuthedUser(userID));
    } else {
      alert("please select your userName");
    }
    console.log(dispatch.answers);
  };

  render() {
    const { userNames } = this.props;
    //const { user } = this.state
    return (
      <div className="d-flex justify-content-center">
        <Card className="bg-dark text-white ">
          <Card.Body>
            <Image src="" rounded />
            <form onSubmit={this.handleSubmit}>
              <h1 className="login-header">join our community !</h1>
              <div className="form-group">
                <label className="control-label">Username</label>

                {
                  <Form.Control as="select" ref={(id) => (this.userID = id)}>
                    <option value="">Select user</option>
                    {userNames.map((item) => (
                      <option value={item.value} key={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </Form.Control>
                }
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-lg" type="submit">
                  Login
                </button>
              </div>
            </form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    userNames: Object.keys(users).map((id) => ({
      value: id,
      label: users[id].name,
    })),
  };
}
export default connect(mapStateToProps)(SignupForm);
