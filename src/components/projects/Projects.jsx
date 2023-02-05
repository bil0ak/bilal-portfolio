import React from "react";
import "./projects.css";

const projects = [
  {
    id: 1,
    title: "Todo App",
    desc: "A todo app built with ReactJS and Appwrite.",
    img: "images/todo.png",
    url: "https://todo-v2.akkil.tech/",
    github: "https://github.com/bil0ak/todo-v2",
    techs: ["ReactJS", "Appwrite"],
  },
  {
    id: 2,
    title: "The MCU",
    desc: "A website that gives the order to the mcu movies. Built with Vanilla JS and TMDB API.",
    img: "images/themcu.png",
    url: "https://themcu.akkil.tech/",
    github: "https://github.com/Bilal-Akkil/themcu",
    techs: ["VanillaJS", "TMDB API"],
  },
];

export default function Projects() {
  return (
    <div className="projects">
      <div className="top">
        <h1 className="projectsTitle">Projects</h1>
        <p className="projectsDesc">
          Here are some of my projects. I have worked on a lot of projects but
          most of them were not deployed.
        </p>
      </div>
      <div className="bottom">
        {projects.map((project) => (
          <div className="project">
            <div className="left">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="right">
              <a href={project.url} target="_blank">
                <h1 className="projectTitle">{project.title}</h1>
              </a>
              <p className="projectDesc">{project.desc}</p>
              <ul className="projectTechs">
                {project.techs.map((tech) => (
                  <li className="projectTech">{tech}</li>
                ))}
              </ul>
              <div className="projectLinks">
                <a href={project.url} target="_blank">
                  <i className="fas fa-link"></i>
                </a>
                <a href={project.github} target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
