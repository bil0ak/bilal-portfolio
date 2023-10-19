import React from "react";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="left">
        <a href="#intro" className="logo">
          Bilal Akkil<span className="dot">.</span>
        </a>
      </div>
      <div className="right">
        {/* list of items */}
        <ul className="items">
          <li className="item">
            <a href="#home">Home</a>
          </li>
          <li className="item">
            <a href="#projects">Projects</a>
          </li>
          <li className="item">
            <a href="#skills">Skills</a>
          </li>
          <li className="item">
            <a href="#education">Education</a>
          </li>
          <li className="item">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Socials */}
        <ul className="socials">
          <li className="social">
            <a href="https://www.github.com/bil0ak" target="_blank">
              <iconify-icon icon="simple-icons:github"></iconify-icon>
            </a>
          </li>
          <li className="social">
            <a href="https://www.linkedin.com/in/bilal-akkil/" target="_blank">
              <iconify-icon icon="simple-icons:linkedin"></iconify-icon>
            </a>
          </li>
          <li className="social">
            <a href="https://twitter.com/bilal_akkil" target="_blank">
              <iconify-icon icon="simple-icons:x"></iconify-icon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
