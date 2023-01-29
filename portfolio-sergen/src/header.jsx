import React from "react";
import './css/header.css';
import Logo from "./logo.svg";
import Github from './github.svg';
import Twitter from './twitter.svg';
import Instagram from './instagram.svg';

export class Header extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <div className="nav-content">
                    <ul>
                        <img className="logo" src={Logo} alt="logo" />
                        <li>idjdidazdazdzadj</li>
                    </ul>
                    <ul className="social-link">
                        <li><img src={Github} alt="Github Logo" /></li>
                        <li><img src={Twitter} alt="Twitter Logo" /></li>
                        <li><img src={Instagram} alt="Instagram Logo" /></li>
                        <button className="btn-cv">Download CV</button>
                    </ul>
                </div>
            </div>
            
        )
    }
}