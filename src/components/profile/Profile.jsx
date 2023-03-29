import React from "react";
import "./profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <div className="left">
        <span className="profileInfoTitle">
          Hello there, I'm
          <h4 className="profileInfoName">Bilal Akkil </h4>
        </span>
        <span className="profileInfoDesc">a Software Engineer</span>
      </div>
      <div className="right">
        <img className="profileImg" src="images/hi.png" alt="" />
      </div>
    </div>
  );
}
