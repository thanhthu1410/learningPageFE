// Import React and CSS file if needed
import React, { useState } from 'react';
import './login.scss';

const Login = () =>{
  const [isSignup, setIsSignup] = useState<boolean>(false);

  const handleLoginClick = () => {
    setIsSignup(!isSignup);
  };

  const handleSignupClick = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className='login_container'>
         <section className= { `wrapper ${isSignup ? 'active' : ''}`}>
      <div className="form_login signup">
        <header onClick={handleSignupClick}>Signup</header>
        <form className='active_form' action="#">
          <input type="text" placeholder="Full name" required />
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <div className="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label htmlFor="signupCheck">I accept all terms & conditions</label>
          </div>
          <input type="submit" value="Signup" />
        </form>
      </div>

      <div className="form_login login">
        <header onClick={handleLoginClick}>Login</header>
        <form className='active_form' action="#">
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot password?</a>
          <input type="submit" value="Login" />
        </form>
      </div>
    </section>
    </div>
   
  );
};

export default Login;
