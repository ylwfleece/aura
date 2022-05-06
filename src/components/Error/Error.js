import ErrorIcon from "./ErrorIcon.js";
import ErrorText from "./ErrorText.js";
import "./Error.css";
const Error = (props) => {
  return (
    <div className="error-message__container">
      <ErrorIcon></ErrorIcon>
      <div
        errmes={props.errmess}
        className="error-message__detail"
        data-testid="errMes"

        // attemptsRemaining={props.attemptsRemaining}
        // remainingTime={props.remainingTime}
        // waitingTime={props.waitingTime}
      >
        {props.errmes}
      </div>
    </div>
  );
};
export default Error;
