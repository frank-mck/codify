import { useState } from "react";
import "./SignIn.css";
import { Link, useHistory } from "react-router-dom";
import Auth from "../../services/AuthService";
import { AuthEnums } from "../../utils/AuthEnums";
import LoadingButton from "@mui/lab/LoadingButton";

export const SignIn: React.FC<any> = ({ authMesgs, setAuthMesgs }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const authMsgStyles: any = {
    color:
      (authMesgs === AuthEnums.successSignup && "rgb(36, 167, 91)") ||
      (authMesgs === AuthEnums.signout && "rgb(36, 167, 91)") ||
      (authMesgs === AuthEnums.invalidCredentials && "rgb(252, 45, 45)") ||
      (authMesgs === AuthEnums.unorthorized && "rgb(252, 45, 45)"),
  };

  const history = useHistory();

  const setInput = (setter: any) => (event: any) => {
    setter(event.currentTarget.value);
  };

  const logIn = async (event: any) => {
    setLoading(true);
    event.preventDefault();
    try {
      await Auth.loginUser({ username: username, password: password });
      setLoading(false);
      history.push("/tasks");
    } catch (err: any) {
      setAuthMesgs(err.response.data.error);
      setLoading(false);
    }
  };

  return (
    <div className="signin-page">
      <div className="sign-in-container">
        <div className="signin-headline-background">
          <h2 className="signin-headline">
            Sort, organize and keep track of your most important{" "}
            <span style={{ color: "#fdfd96" }}>tasks</span>.
          </h2>
        </div>
        <div className="signin-bar">
          <h1 className="signin-title">Sign in</h1>
          <p style={{ marginRight: "-20px" }}>or</p>
          <Link
            style={{ marginLeft: ".4rem" }}
            className="signup-link"
            to="/signup"
          >
            create an account
          </Link>
        </div>
        <form className="sign-in-form" onSubmit={logIn}>
          <label htmlFor="username">Username</label>
          <input
            className="signin-input"
            type="text"
            required
            name="username"
            autoComplete="on"
            id="username"
            onChange={setInput(setUsername)}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            className="signin-input"
            type="password"
            name="password"
            autoComplete="on"
            required
            id="password"
            onChange={setInput(setPassword)}
          ></input>
          <LoadingButton
            loading={loading}
            style={{
              marginTop: "1rem",
              width: "100%",
              backgroundColor: "yellow",
              color: `${!loading ? "black" : "yellow"}`,
            }}
            variant="contained"
            type="submit"
          >
            Sign in
          </LoadingButton>
        </form>
        <div className="signout-mesgs">
          <p style={authMsgStyles}>{authMesgs}</p>
        </div>
      </div>
    </div>
  );
};
