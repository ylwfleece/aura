import ErrorIcon from "./ErrorIcon.js";
import ErrorText from "./ErrorText.js";
import "./Error.css";
const Error = (props) => {
  return (
    <div className="error-message__container">
      <ErrorIcon></ErrorIcon>
      <ErrorText
        className="error-message"
        id={props.id}
        attemptsRemaining={props.attemptsRemaining}
        // remainingTime={props.remainingTime}
        // waitingTime={props.waitingTime}
      ></ErrorText>
    </div>
  );
};
export default Error;
