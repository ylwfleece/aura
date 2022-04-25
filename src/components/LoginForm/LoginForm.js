import "./LoginForm.css";
import AuraButton from "../Button/AuraButton";
import Input from "../Input/Input";
import Error from "../Error/Error.js";
import { Button } from "@mui/material";
// background-image: url("./assets/images/shutterstock_363952133.jpg");
// ./assets/images/fav-icon.jpg

const LoginForm = (props) => {
  return (
    <div className="jumbo-card">
      <div className="jumbo-card-top">
        <img src='../../assets/images/pdf_icon.png' className="aura-logo-img" />
        <div className="aura-logo-txt">Aura</div>
      </div>
      <div className="login-form-container">
        <section className="login-standard">
          <Input placeholder="Email Address" type="email" />
          <Input placeholder="Password" type="password"/>
          {/* <Error /> */}
          <AuraButton>login</AuraButton>
          <span className="forgot-password">forgot pw</span>
        </section>
        <span className="login-hr">___________</span>
        <section className="login-google">
          <span className="login-using">login using</span>
          <AuraButton>google</AuraButton>
        </section>
      </div>
    </div>
  );
};

export default LoginForm;
