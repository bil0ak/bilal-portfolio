import React from "react";
import "./education.css";

export default function Education() {
  return (
    <div className="education">
      <div className="education_container">
        <div className="top">
          <h1 className="title">Education</h1>
        </div>
        <div className="bottom">
          <div className="item">
            <div className="title">
              <i className="fas fa-graduation-cap"></i>
              Teesside University, UK
            </div>
            <div className="subtitle">BSc (Hons) Computer Science</div>
          </div>
          <div className="item">
            <div className="title">
              <i className="fas fa-graduation-cap"></i>
              British Applied College, UAE
            </div>
            <div className="subtitle">Higher National Diploma in Computing</div>
          </div>
        </div>
      </div>
    </div>
  );
}
