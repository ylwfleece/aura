import LoginForm from "./LoginForm";
import AuraButton from "../Button/AuraButton";
import headerSvg from "../../assets/svg/aura-logo-icon.svg";
import gmailIcon from "../../assets/images/gmail_icon.png";

const GmailIcon = () => {
  return <img style={{ height: "20px", width: "20px" }} src={gmailIcon} />;
};
export default function () {
  return (
    <div className="jumbo-card">
      <div className="jumbo-card-top">
        <img src={headerSvg} className="aura-logo-img" alt="Aura Logo" />
      </div>
      <div className="login-form-container">
        <LoginForm />
        <section className="login-google">
          <hr className="horizontal-line" />
          <span className="login-using">Login using</span>
          <AuraButton
            startIcon={<GmailIcon />}
            sx={{ textTransform: "none", padding: "16px 0px" }}
            color="error"
            variant="outlined"
            fullWidth={true}
          >
            Gmail
          </AuraButton>
        </section>
      </div>
    </div>
  );
}
