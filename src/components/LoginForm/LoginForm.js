import './LoginForm.css';
import { useState } from 'react';
import AuraButton from '../Button/AuraButton';
import Input from '../AuraInput/AuraInput';
import Error from '../Error/Error.js';
import headerSvg from '../../assets/svg/aura-logo-icon.svg';
import gmailIcon from '../../assets/images/gmail_icon.png';


const GmailIcon = () => {
  return <img style={{ height: '20px', width: '20px' }} src={gmailIcon} />;
};

const LoginForm = (props) => {
  const [errorCounter, setErrorCounter] = useState(5);
  const [isDisabled, setIsDisabled] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorState, setErrorState] = useState('');

  function handleEmailOnChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordOnChange(e) {
    setPassword(e.target.value);
  }
  
  
  function handleFormSubmit(e) {
    e.preventDefault();
    if (email === 'test@gmail.com' && password === 'test') {
      setErrorCounter(5);
      setErrorState('');
      alert('successfully logged in');
    } else if (errorCounter===1){
      setErrorState('abused-login');
      setIsDisabled(true);
    } else {
      setErrorCounter(errorCounter-1);
      setErrorState('wrong-password');
    }
    console.log('Username: '+email)
    console.log('Password: '+password)
  }
  return (
    <div className='jumbo-card'>
      <div className='jumbo-card-top'>
        <img src={headerSvg} className='aura-logo-img' alt='Aura Logo'/>
      </div>
      <div className='login-form-container'>
        <section className='login-standard'>
          <div className='form-row'>
            <Input
              placeholder='Email Address'
              type='email'
              fullWidth={true}
              onChange={handleEmailOnChange}
              
            />
          </div>
          <div className='form-row'>
            <Input
              placeholder='Password'
              type='password'
              fullWidth={true}
              onChange={handlePasswordOnChange}
            />
          </div>

          {errorState && (
            <div className='form-row'>
              <Error id={errorState} attemptsRemaining={errorCounter}/>
            </div>
          )}

          <div className='btn-container'>
            <AuraButton
              disabled={isDisabled}
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
