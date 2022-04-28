import ErrorIcon from "./ErrorIcon.js";
import "./LoginError.css";
const LoginError = (props) => {
  const errorClassName = props.className
    ? `${props.className} error-message__container`
    : "error-message__container";
  return (
    <div className={errorClassName}>
      <ErrorIcon></ErrorIcon>
      <p className="error-message__detail">{props.errMes}</p>
    </div>
  );
};
export default LoginError;
