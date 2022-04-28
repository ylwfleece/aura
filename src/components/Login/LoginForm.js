import "./LoginForm.css";
import { useState } from "react";
import AuraButton from "../Button/AuraButton";
import Input from "../Input/AuraInput";
import LoginError from "../Error/LoginError.js";
import { useInput } from "../hooks/useInput.js";
import Spinner from "../Spinner/Spinner.js";
import { login, getErrorMessage } from "../../services/mock/auth.api";

const LoginForm = (props) => {
  const [errorCounter, setErrorCounter] = useState(5);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState("");
  const [email, handleEmailChange, resetEmail] = useInput();
  const [password, handlePasswordChange, resetPassword] = useInput();
  const user = { email, passWord: password };
  const [loginToken, setLoginToken] = useState(null);

  async function handleLogin(user) {
    setIsLoading(true);
    const resLoginStatus = await login(user);
    if (resLoginStatus.errorCode === 0) {
      console.log("User is logged in");
      setIsLoading(false);
      setLoginToken(resLoginStatus.result);
      console.log(loginToken);
    } else {
      const resErrMes = await getErrorMessage(resLoginStatus.errorCode);
      console.log(resErrMes);
      let errMes;
      if (resErrMes.errorCode === "3") {
        const findErr = await getErrorMessage(resErrMes.errorCode);
        errMes = findErr.result;
      } else {
        errMes = resErrMes.result;
      }
      setErrorState(errMes);
      console.log(errMes);
      setIsLoading(false);
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!email) {
      setErrorState("Please enter your email address.");
      return;
    } else if (!password) {
      setErrorState("Please enter your password.");
      return;
    }
    handleLogin(user).then(() => {
      console.log(errorState);
      setErrorState("");
      resetEmail();
      resetPassword();
      console.log(loginToken);
    });
    // if (errorState === "Invalid Credentials. Attemps Remaining:") {
    //   if (errorCounter === 0) {
    //     setErrorState(
    //       "Your account has been locked because of consecutive failed login attempts."
    //     );
    //     setIsDisabled(true);
    //   } else {
    //     setErrorCounter(errorCounter - 1);
    //     setErrorState(
    //       `Invalid Credentials. Attemps Remaining: ${errorCounter - 1}`
    //     );
    //   }
    // }
    // setErrorCounter(5);
  }

  return (
    <form className="login-standard">
      {isLoading && <Spinner />}
      <div className="form-row">
        <Input
          placeholder="Email Address"
          value={email}
          type="email"
          fullWidth={true}
          onChange={handleEmailChange}
        />
      </div>
      <div className="form-row">
        <Input
          placeholder="Password"
          value={password}
          type="password"
          fullWidth={true}
          onChange={handlePasswordChange}
          autoComplete="on"
        />
      </div>

      {errorState && (
        <LoginError errMes={errorState} attemptsRemaining={errorCounter} />
      )}

      <div className="btn-container">
        <AuraButton
          disabled={isDisabled}
          variant="contained"
          fullWidth={true}
          sx={{ padding: "16px 0px" }}
          onClick={handleFormSubmit}
        >
          Login
        </AuraButton>

        <a className="forgot-password" href="##">
          Forgot Password?
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
