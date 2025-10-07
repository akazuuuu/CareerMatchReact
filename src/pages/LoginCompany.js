import React from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/LoginCompany.css';

function LoginCompany() {
  return (
    <div>
     <div class="WelcomeTitle">
        <div class="WelcomeFlex">
            <div class="WelcomeFlexText">
                <p>Welcome to</p>
                <h1>CareerMatch</h1>
            </div>
            <img src="images/work.png"/>
        </div>
    </div>
<div class="LoginBody">
   
     <div class="login-container">
        <div class="MobilePic">
  <img src="images/work.png"/>
</div>

        <div class="login-header">
            <h2>Login to your Account</h2>

        </div>

        <div class="success-message" id="successMessage">
            Login successful! Welcome back.
        </div>

        <form id="loginForm">
            <div class="form-group">
   
                <input type="email" id="email" name="email" required placeholder="Company Email"/>
            </div>

            <div class="form-group">

                <input type="password" id="password" name="password" required placeholder="Password"/>
            </div>
<div class="buttonFlex">
           <a href="index.html">
            <button type="submit" class="login-btn">Log in</button>
</a>

 <a href="registerCompany.html" class="dctRegister">Sign up</a>
</div>

             <div class="forgot-password">
                <a href="#" onclick="showAlert('Password reset link sent to your email!')">Forgot Password?</a>
            </div>

        </form>

    </div>
    </div>
    </div>
  );
}

export default LoginCompany;