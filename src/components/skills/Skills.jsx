import React from "react";
import "./skills.css";

const skills = [
  {
    title: "NodeJS",
    lvl: 3,
  },
  {
    title: "ReactJS",
    lvl: 3,
  },
  {
    title: "JavaScript",
    lvl: 3,
  },
  {
    title: "Git",
    lvl: 3,
  },
  {
    title: "MongoDB",
    lvl: 3,
  },
  {
    title: "Linux",
    lvl: 3,
  },
  {
    title: "Flutter/Dart",
    lvl: 2,
  },
  {
    title: "Docker",
    lvl: 2,
  },
  {
    title: "AWS",
    lvl: 2,
  },
  {
    title: "Python",
    lvl: 2,
  },
  {
    title: "Caddy",
    lvl: 1,
  },
  {
    title: "Apache",
    lvl: 1,
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
          <div className="lvl">
            {skills
              .filter((skill) => skill.lvl === 3)
              .map((skill, index) => (
                <div className="item lvl3" key={index}>
                  <div className="title">{skill.title}</div>
                </div>
              ))}
          </div>
          <div className="lvl">
            {skills
              .filter((skill) => skill.lvl === 2)
              .map((skill, index) => (
                <div className="item lvl2" key={index}>
                  <div className="title">{skill.title}</div>
                </div>
              ))}
          </div>
          <div className="lvl">
            {skills
              .filter((skill) => skill.lvl === 1)
              .map((skill, index) => (
                <div className="item lvl1" key={index}>
                  <div className="title">{skill.title}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
