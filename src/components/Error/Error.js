import ErrorIcon from './ErrorIcon.js';
import ErrorText from './ErrorText.js';
import './Error.css';
const Error = ({ message }) => {
  return (
    <div className='error-message__container'>
      <ErrorIcon></ErrorIcon>
      <ErrorText
        className='error-message'
        message={message}
        // id={props.id}
        // attemptsRemaining={props.attemptsRemaining}
        // remainingTime={props.remainingTime}
        // waitingTime={props.waitingTime}
      />
    </div>
  );
};
export default Error;
