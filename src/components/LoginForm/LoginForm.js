import './LoginForm.css';
import { useState } from 'react';
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
  const [isError, setIsError] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailOnChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordOnChange(e) {
    setPassword(e.target.value);
  }

  function toggleError() {
    setIsError((prevState) => !prevState);
  }

  function handleFormSubmit(e) {
    console.log('email:', email);
    console.log('password:', password);
    e.preventDefault();
    if (email === 'test@gmail.com' && password === 'test') {
      setIsError(false);
      alert('successfully logged in');
    } else {
      setIsError(true);
    }
  }

  return (
    <div className='jumbo-card'>
      <div className='jumbo-card-top'>
        <img src={headerSvg} className='aura-logo-img' />
      </div>
      <div className='login-form-container'>
        <section className='login-standard'>
          <div className='form-row'>
            <Input
              placeholder='Email Address'
              type='email'
              fullWidth={true}
              onChange={(e) => handleEmailOnChange(e)}
            />
          </div>
          <div className='form-row'>
            <Input
              placeholder='Password'
              type='password'
              fullWidth={true}
              onChange={(e) => handlePasswordOnChange(e)}
            />
          </div>

          {isError && (
            <div className='form-row'>
              <Error />
            </div>
          )}

          <div className='btn-container'>
            <AuraButton
              variant='contained'
              fullWidth={true}
              sx={{ padding: '16px 0px' }}
              onClick={handleFormSubmit}
            >
              Login
            </AuraButton>
            <a className='forgot-password' href='##'>
              Forgot Password?
            </a>
          </div>
        </section>
        {/* <span className='login-hr'>___________</span> */}
        <hr className='horizontal-line' />
        <section className='login-google'>
          <span className='login-using'>Login using</span>
          <AuraButton
            startIcon={<GmailIcon />}
            sx={{ textTransform: 'none', padding: '16px 0px' }}
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
