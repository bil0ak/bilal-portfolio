import React from "react";
import "./skills.css";

const skills = [
  {
    id: 1,
    title: "NodeJS",
    lvl: 3,
  },
  {
    id: 2,
    title: "ReactJS",
    lvl: 3,
  },
  {
    id: 3,
    title: "JavaScript",
    lvl: 3,
  },
  {
    id: 4,
    title: "Git",
    lvl: 3,
  },
  {
    id: 5,
    title: "MongoDB",
    lvl: 3,
  },
  {
    id: 6,
    title: "Linux",
    lvl: 3,
  },
  {
    id: 7,
    title: "Docker",
    lvl: 2,
  },
  {
    id: 8,
    title: "AWS",
    lvl: 2,
  },
  {
    id: 9,
    title: "Python",
    lvl: 2,
  },
  {
    id: 10,
    title: "Caddy",
    lvl: 1,
  },
  {
    id: 11,
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
              .map((skill) => (
                <div className="item lvl3" key={skill.id}>
                  <div className="title">{skill.title}</div>
                </div>
              ))}
          </div>
          <div className="lvl">
            {skills
              .filter((skill) => skill.lvl === 2)
              .map((skill) => (
                <div className="item lvl2" key={skill.id}>
                  <div className="title">{skill.title}</div>
                </div>
              ))}
          </div>
          <div className="lvl">
            {skills
              .filter((skill) => skill.lvl === 1)
              .map((skill) => (
                <div className="item lvl1" key={skill.id}>
                  <div className="title">{skill.title}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
