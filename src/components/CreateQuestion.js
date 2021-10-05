import React, { Component } from "react";
import { handleCreateQuestion } from "../actions/questions";
import { connect } from "react-redux";
class CreateQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    e.preventDefault();
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, authedUser } = this.props;
    const { optionOneText, optionTwoText } = this.state;

    if (optionOneText && optionTwoText) {
      dispatch(
        handleCreateQuestion({ optionOneText, optionTwoText, authedUser }),
      );
    }

    console.log(optionOneText);
    this.props.history.push("/");
  };
  render() {
    const { optionOneText, optionTwoText } = this.state;
    return (
      <div className="d-flex justify-content-center">
        <div
          className="card"
          style={{
            marginTop: "30px",
            width: "500px",
            padding: "15px",
          }}
        >
          <h3 className="card-header text-center">Would You Rather!</h3>
          <div
            className="form"
            style={{
              padding: "15px",
            }}
          >
            <div
              className="form-group"
              style={{
                marginTop: "10px",
              }}
            >
              <h4 className="form-label">Option One</h4>
              <input
                type="text"
                name="optionOneText"
                value={optionOneText}
                className="form-control"
                placeholder="Enter Option One"
                onChange={this.handleChange}
              />
            </div>
            <div
              className="form-group"
              style={{
                marginTop: "10px",
              }}
            >
              <h4 className="form-label">Option Two</h4>
              <input
                type="text"
                name="optionTwoText"
                value={optionTwoText}
                className="form-control"
                placeholder="Enter Option Two"
                onChange={this.handleChange}
              />
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              style={{
                marginLeft: "43%",
              }}
              onClick={this.handleSubmit}
              disabled={optionOneText === "" || optionTwoText === ""}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(CreateQuestion);
