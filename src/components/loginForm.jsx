import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };
  username = React.createRef();
  handleSubmit = (e) => {
    e.preventDefault();

    // call the server

    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login form</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={account.username}
              onChange={this.handleChange}
              autoFocus
              ref={this.username}
              type="text"
              className="form-control"
              id="username"
              name="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
