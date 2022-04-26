import './LoginForm.css';
import AuraButton from '../Button/AuraButton';
import Input from '../Input/AuraInput';
import Error from '../Error/Error.js';
import { Button } from '@mui/material';
import headerSvg from '../../assets/svg/aura-logo-icon.svg';
import gmailIcon from '../../assets/images/gmail_icon.png';
// background-image: url("./assets/images/shutterstock_363952133.jpg");
// ./assets/images/fav-icon.jpg

const GmailIcon = () => {
  return <img style={{ height: '20px', width: '20px' }} src={gmailIcon} />;
};

const LoginForm = (props) => {
  return (
    <div className='jumbo-card'>
      <div className='jumbo-card-top'>
        <img src={headerSvg} className='aura-logo-img' />
      </div>
      <div className='login-form-container'>
        <section className='login-standard'>
          <div className='form-row'>
            <Input placeholder='Email Address' type='email' fullWidth={true} />
          </div>
          <div className='form-row'>
            <Input placeholder='Password' type='password' fullWidth={true} />
          </div>

          <div className='btn-container'>
            <AuraButton variant='contained' fullWidth={true}>
              Login
            </AuraButton>
            <span className='forgot-password'>Forgot Password?</span>
          </div>
        </section>
        {/* <span className='login-hr'>___________</span> */}
        <hr className='horizontal-line' />
        <section className='login-google'>
          <span className='login-using'>Login using</span>
          <AuraButton
            startIcon={<GmailIcon />}
            sx={{ textTransform: 'none' }}
            color='error'
            variant='outlined'
            fullWidth={true}
          >
            Gmail
          </AuraButton>
        </section>
      </div>
    </div>
  );
};

export default LoginForm;
