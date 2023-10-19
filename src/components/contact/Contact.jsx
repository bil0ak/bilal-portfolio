import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact_container">
        <div className="top">
          <h1 className="title">Contact</h1>
        </div>
        <div className="bottom">
          <div className="item">
            <div className="title">
              <iconify-icon icon="ic:round-email"></iconify-icon>
            </div>
            <div className="subtitle">
              <a href="mailto:contact@bilalakkil.com" _target="blank">
                contact@bilalakkil.com
              </a>
            </div>
          </div>
          <div className="item">
            <div className="title">
              <iconify-icon icon="simple-icons:x"></iconify-icon>
            </div>
            <div className="subtitle">
              <a href="https://twitter.com/bilal_akkil" target="_blank">
                @bilal_akkil
              </a>
            </div>
          </div>
          <div className="item">
            <div className="title">
              <iconify-icon icon="simple-icons:linkedin"></iconify-icon>
            </div>
            <div className="subtitle">
              <a
                href="https://www.linkedin.com/in/bilal-akkil/"
                target="_blank"
              >
                Bilal Akkil
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
