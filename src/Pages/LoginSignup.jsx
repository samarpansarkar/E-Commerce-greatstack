import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignUp = () => {
  return (
    <div className='logInSignUp'>
      <div className="logInSignUp-container">
        <h1>Sign Up</h1>
        <div className="logInSignUp-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='logInSignUp-login'>
          Already have an account? <span>LogIn Here</span>
        </p>
        <div className="logInSignUp-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy. </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
