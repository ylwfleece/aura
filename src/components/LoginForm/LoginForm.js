import './LoginForm.css';
import { useState } from 'react';
import AuraButton from '../Button/AuraButton';
import Input from '../Input/AuraInput';
import Error from '../Error/Error.js';
import headerSvg from '../../assets/svg/aura-logo-icon.svg';
import gmailIcon from '../../assets/images/gmail_icon.png';
import { login, getErrorMessage } from '../../services/mock/auth.api';


const GmailIcon = () => {
  return <img style={{ height: '20px', width: '20px' }} src={gmailIcon} />;
};

const LoginForm = (props) => {
  //const [errorCounter, setErrorCounter] = useState(5);
  //const [isDisabled, setIsDisabled] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorState, setErrorState] = useState('');

  function handleEmailOnChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordOnChange(e) {
    setPassword(e.target.value);
  }
  
  function getUserInfo(){
    return {
      email: email,
      passWord: password,
      jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJ0ZXN0QGFudHJhLmNvbSIsIm5hbWUiOiJ0ZXN0IiwidXNlcklkIjoiMTIzMjEzMTIiLCJpYXQiOjE1MTYyMzkwMjJ9.XxBVHmaT7wGOlb9zGR7CSdQ7ZAvDx4Rqlt1trv9rmTU"
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    let user = getUserInfo();
    login(user)
      .then((res) => {
        console.log(res);
        return getErrorMessage(res.errorCode);
      })
      .then((res) => {
        //setIsLoading(false);
        setErrorState(res.result);
      });
    console.log('Email: '+email)
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
              <Error val={errorState} />
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
