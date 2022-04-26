import "./LoginForm.css";

const LoginForm = (props) => {
  return (
    <div className="login-form-container">
      <section className="login-standard">
        <input placeholder="email" className="email-input"></input>
        <input placeholder="pw" className="password-input"></input>
        <span className="error-msg">err msg</span>
        <button className="submit-login">login</button>
        <span className="forgot-password">forgot pw</span>
      </section>
      <span className="login-hr">___________</span>
      <section className="login-google">
        <span className="login-using">login using</span>
        <button className="submit-google-login">google login</button>
      </section>
    </ div>
  );
};

export default LoginForm;
