import React from 'react';
import './Header.css';
import logo from '../../logo.png';
import profile from '../../profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    // Logout button event listener
    const logOutEvent = () => {
        document.getElementById("loginArea").style.setProperty('display', 'flex', 'important');
        document.getElementById("header").style.setProperty('display', 'none', 'important');
        document.getElementById("usersContainer").style.setProperty('display', 'none', 'important');
    }

    return (
        <header id="header">
            <nav className="d-flex justify-content-between align-items-center container">
                <img className="logo" src={logo} alt="" />

                <div className="aboutMe">
                    <button className="btn btn-primary message"><FontAwesomeIcon icon={faEnvelope} /></button>

                    <button className="btn btn-primary notification"><FontAwesomeIcon icon={faBell} /></button>

                    <img className="myPicture" src={profile} alt="" />
                    <button className="btn btn-warning" onClick={logOutEvent}>Log Out</button>
                </div>
            </nav>
        </header >
    );
};

export default Header;