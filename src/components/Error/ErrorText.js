const ErrorText = (props) => {
  // let mainContent = 'Something went wrong please try again';
  // if (props.id === 'non-existed-email') {
  //   mainContent = <p>Email ID does not exist</p>;
  // } else if (props.id === 'inactive-user') {
  //   mainContent = <p>User is Inactive. Please contact the Admin</p>;
  // } else if (props.id === 'abused-login') {
  //   mainContent = (
  //     <p>
  //       Your account has been locked because of consecutive failed login
  //       attempts. Please try again in <span>{props.waitingTime}</span> minute
  //     </p>
  //   );
  // } else if (props.id === 'wrong-password') {
  //   mainContent = (
  //     <p>
  //       Invalid Credentials. Attemps Remaining:{' '}
  //       <span> {props.remainingTime}</span>
  //     </p>
  //   );
  // }
  // return <p className='error-message__detail'>{mainContent}</p>;
  return <p className='error-message__detail'>{props.msg}</p>
};
export default ErrorText;
