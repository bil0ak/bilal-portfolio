import React from "react";
import "./skills.css";

const skills = [
  {
    id: 1,
    title: "Web Development",
  },
  {
    id: 2,
    title: "Mobile Development",
  },
  {
    id: 3,
    title: "UI/UX Design",
  },
  {
    id: 4,
    title: "Data Science",
  },
];
export default function Skills() {
  return (
    <div className="skills">
      <div className="skills_container">
        <div className="top">
          <h1 className="title">Skills</h1>
        </div>
        <div className="bottom">
          {skills.map((skill) => (
            <div className="item">
              <div className="title">{skill.title}</div>
              <div className="bar">
                <div className="bar_filled"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
