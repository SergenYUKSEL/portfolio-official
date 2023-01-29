import React from "react";
import './css/skills.css';

export class Skills extends React.Component {
    render() {
        return (
            <div className="skills-bar">
                <ul className="skills-list">
                    <li>HTML5</li>
                    <li className="stars">*</li>
                    <li>CSS</li>
                    <li className="stars">*</li>
                    <li>JAVASCRIPT</li>
                    <li className="stars">*</li>
                    <li>REACTJS</li>
                    <li className="stars">*</li>
                    <li>PHP</li>
                    <li className="stars">*</li>
                    <li>UI/UX</li>
                    <li className="stars">*</li>
                    <li>ADOBE XD</li>
                </ul>
            </div>
        )
    }
}