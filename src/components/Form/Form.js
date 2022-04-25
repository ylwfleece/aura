const Form = (props) => {
  return (
    <>
      <section className="login-standard">
        <input className="email-input"></input>
        <input className="password-input"></input>
        <span className="error-msg"></span>
        <button className="submit-login"></button>
        <span className="forgot-password"></span>
      </section>
      <hr></hr>
      <section className="login-google">
        <span className="login-using"></span>
        <button className="submit-google-login">
        </button>
      </section>
    </>
  );
};

export default Form;
