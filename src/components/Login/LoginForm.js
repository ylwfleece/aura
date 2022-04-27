import "./LoginForm.css";
import { useState } from "react";
import AuraButton from "../Button/AuraButton";
import Input from "../Input/AuraInput";
import LoginError from "../Error/LoginError.js";

import Spinner from "../Spinner/Spinner.js";
import { login, getErrorMessage } from "../../services/mock/auth.api";

const LoginForm = (props) => {
  const [errorCounter, setErrorCounter] = useState(5);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorState, setErrorState] = useState("");
  const user = { email, passWord: password };

  function handleEmailOnChange(e) {
    setEmail(e.target.value.trim());
  }
  function handlePasswordOnChange(e) {
    setPassword(e.target.value.trim());
  }
  async function handleLogin(user) {
    setIsLoading(true);
    const resLoginStatus = await login(user);
    console.log(resLoginStatus);
    if (resLoginStatus.result) {
      console.log("User is logged in");
      setIsLoading(false);
    } else {
      const resErrMes = await getErrorMessage(resLoginStatus.errorCode);
      console.log(resErrMes);

      if (resErrMes.result) {
        const errMes = resErrMes.result;
        setErrorState(errMes);
        console.log(errMes);
        setIsLoading(false);
      } else {
        const findErr = await getErrorMessage(resErrMes.errorCode);
        const errMes = findErr.result;
        setErrorState(errMes);
        console.log(errMes);
        setIsLoading(false);
      }
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
    handleLogin(user);
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
    setErrorState("");
    // setErrorCounter(5);
  }
  return (
    <form className="login-standard">
      {isLoading && <Spinner />}
      <div className="form-row">
        <Input
          placeholder="Email Address"
          type="email"
          fullWidth={true}
          onChange={handleEmailOnChange}
        />
      </div>
      <div className="form-row">
        <Input
          placeholder="Password"
          type="password"
          fullWidth={true}
          onChange={handlePasswordOnChange}
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
