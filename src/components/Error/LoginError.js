import ErrorIcon from "./ErrorIcon.js";
// import ErrorText from "./ErrorText.js";
import "./LoginError.css";
const Error = (props) => {
  const errorClassName = props.className
    ? `${props.className} error-message__container`
    : "error-message__container";
  return (
    <div className={errorClassName}>
      <ErrorIcon></ErrorIcon>
      {/* <ErrorText
        className="error-message"
        errMes={props.errMes}
        attemptsRemaining={props.attemptsRemaining}
        // remainingTime={props.remainingTime}
        // waitingTime={props.waitingTime}
      ></ErrorText> */}
      <p className="error-message__detail">{props.errMes}</p>
    </div>
  );
};
export default Error;
