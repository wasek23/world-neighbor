import React from 'react';
import './Login.css';

const Login = () => {
    // Login button event listener
    const loginEvent = () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username == "wasek" && password == 12345) {
            document.getElementById("loginArea").style.setProperty('display', 'none', 'important');
            document.getElementById("header").style.setProperty('display', 'block', 'important');
            document.getElementById("usersContainer").style.setProperty('display', 'block', 'important');
        }
    }


    const signUpEvent = () => {

    }

    return (
        <div className="loginPage d-flex justify-content-between align-items-center" id="loginArea">
            <div className="loginForm">
                <p>Username: wasek</p>
                <p>Password: 12345</p>

                <input type="text" className="form-control" placeholder="Username" id="username" />
                <input type="password" className="form-control" placeholder="Password" id="password" />
                <input type="submit" onClick={loginEvent} className="btn btn-primary" value="Login" />

                <p>Not have an account? <a href="/" onClick={signUpEvent}>Sign Up</a></p>
            </div>
        </div>
    );
};

export default Login;