import React from "react";
import { withRouter } from "react-router-dom";
import injectSheet from "react-jss";
// import { width } from "window-size";

const styles = {
  "login-page": {
    marginTop: "20vh",
    "& h2":{
      fontWeight: 'lighter'
    },
    "& #login-form": {
      "& input": {
        marginTop: "10px",
        width: "250px",
        height: "35px",
        border: "solid 1px",
        borderRadius: "2px",
        fontSize: "17px",
        paddingLeft: "11px",
        fontFamily: "sans-serif"
      },
      "& button": {
        marginTop: "32px",
        height: "40px",
        width: "141px",
        backgroundColor: "#FF5722",
        borderRadius: "4px",
        fontSize: "17px",
        color: "#000000ab"
      }
    }
  }
};

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }

  changeInput = (input, event) => {
    debugger;
    let state = this.state;
    state[input] = event.target.value;
    this.setState({ ...state })
  }

  submitted = () => {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes["login-page"]}>
        <h2>Log In</h2>
        <form id="login-form" name="loginForm" role="from">
          <div>
            <input
              id="username"
              placeholder="Username"
              type="text"
              onChange={this.changeInput.bind(this,'name')}
              value={this.state.name}
            />
          </div>
          <div>
            <input
              id="password"
              placeholder="Password"
              type="password"
              onChange={this.changeInput.bind(this,'password')}
              value={this.state.password}
            />
          </div>
          <div>
            <button type="submit" onClick={this.submitted}>
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export const Login = withRouter(injectSheet(styles)(LoginComponent));
