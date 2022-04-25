const ErrorText = (props) => {
  let mainContent = "";
  if (props.id === "non-existed-email") {
    mainContent = <p>Email ID does not exist</p>;
  } else if (props.id === "inactive-user") {
    mainContent = <p>User is Inactive. Please contact the Admin</p>;
  } else if (props.id === "abused-login") {
    mainContent = (
      <p>
        Your account has been locked because of consecutive failed login
        attempts. Please try again in <span>{props.waitingTime}</span> minute
      </p>
    );
  } else if (props.id === "wrong-password") {
    mainContent = (
      <p>
        Invalid Credentials. Attemps Remaining:{" "}
        <span> {props.remainingTime}</span>
      </p>
    );
  }
  return (
    <p class="error-message__detail">
      {`Your account has been locked because of consecutive failed login attempts. Please try again in 1 minute`}
    </p>
  );
};
export default ErrorText;
