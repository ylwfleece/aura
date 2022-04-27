import './LoginForm.css';
import { useState } from 'react';
import AuraButton from '../Button/AuraButton';
import Input from '../Input/AuraInput';
import Error from '../Error/Error.js';
import headerSvg from '../../assets/svg/aura-logo-icon.svg';
import gmailIcon from '../../assets/images/gmail_icon.png';
import AuraLoadingButton from '../AuraLoadingButton/AuraLoadingButton';
import { login, getErrorMessage } from '../../services/mock/auth.api';

const GmailIcon = () => {
  return <img style={{ height: '20px', width: '20px' }} src={gmailIcon} />;
};

const LoginForm = (props) => {
  // const [errorCounter, setErrorCounter] = useState(5);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [jwtToken, setJwtToken] = useState(null);

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [errorState, setErrorState] = useState('');

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  function handleChange(e) {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  }

  function handleError(errorCode) {
    setIsError(true);
    getErrorMessage(errorCode).then((errorMessage) => {
      setErrorMessage(errorMessage.result);
    });
  }

  function handleLogin() {
    setIsLoading(true);
    login(user).then((response) => {
      console.log('response', response);
      if (response.errorCode === 0) {
        setJwtToken(response.result.jwt);
      } else if (response.errorCode === 1) {
        handleError(response.errorCode);
      } else if (response.errorCode === 2) {
        handleError(response.errorCode);
      } else {
        handleError(response.errorCode);
      }

      setIsLoading(false);
    });
  }
  return (
    <div className='jumbo-card'>
      <div className='jumbo-card-top'>
        <img src={headerSvg} className='aura-logo-img' alt='Aura Logo' />
      </div>
      <div className='login-form-container'>
        <section className='login-standard'>
          <div className='form-row'>
            <Input
              placeholder='Email Address'
              type='email'
              name='email'
              fullWidth={true}
              onChange={handleChange}
              value={user.email}
            />
          </div>
          <div className='form-row'>
            <Input
              placeholder='Password'
              type='password'
              name='password'
              fullWidth={true}
              onChange={handleChange}
              value={user.password}
            />
          </div>

          {/* {errorState && (
            <div className='form-row'>
              <Error id={errorState} attemptsRemaining={errorCounter} />
            </div>
          )} */}
          {isError && (
            <div className='form-row'>
              <Error message={errorMessage} />
            </div>
          )}

          <div className='btn-container'>
            {isLoading ? (
              <AuraLoadingButton sx={{ padding: '16px 0px' }} />
            ) : (
              <AuraButton
                disabled={isDisabled}
                variant='contained'
                fullWidth={true}
                sx={{ padding: '16px 0px' }}
                onClick={handleLogin}
              >
                Login
              </AuraButton>
            )}

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
