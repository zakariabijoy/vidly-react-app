import React, { Component } from "react";

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    // call the server

    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login form</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" className="form-control" id="password" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
