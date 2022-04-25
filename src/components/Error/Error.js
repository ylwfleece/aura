import ErrorIcon from "./ErrorIcon.js";
import ErrorText from "./ErrorText.js";
const ErrorText = (props) => {
  return (
    <div class="error-message">
      <ErrorIcon></ErrorIcon>
      <ErrorText
        id={props.id}
        remainingTime={props.remainingTime}
        waitingTime={props.waitingTime}
      ></ErrorText>
    </div>
  );
};
export default ErrorText;
