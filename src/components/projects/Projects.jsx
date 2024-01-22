import React from "react";
import "./projects.css";

const projects = [
  {
    id: 1,
    title: "The MCU",
    desc: "A website that gives the order to the mcu movies. Built with Vanilla JS and TMDB API.",
    img: "images/themcu.png",
    url: "https://themcu.bilalakkil.com/",
    github: "https://github.com/Bilal-Akkil/themcu",
    techs: ["VanillaJS", "TMDB API"],
  },
  {
    id: 2,
    title: "Todo App",
    desc: "A todo app built with ReactJS and Appwrite.",
    img: "images/todo.png",
    url: "https://todo-v2.bilalakkil.com/",
    github: "https://github.com/bil0ak/todo-v2",
    techs: ["ReactJS", "Appwrite"],
  },
  {
    id: 3,
    title: "Al Fursan Real Estate",
    desc: "A simple portfolio website for a real estate company.",
    img: "images/alfursan.png",
    url: "https://alfursanrealestate.com/",
    techs: ["ReactJS", "Vercel"],
  },
  {
    id: 4,
    title: "Prestige Store",
    desc: "An e-commerce platform built with ReactJS and ExpressJS.",
    img: "images/prestige.png",
    techs: [
      "ReactJS",
      "ExpressJS",
      "MongoDB",
      "Stripe",
      "Caddy",
      "Docker",
      "AWS EC2",
      "AWS S3",
    ],
  },
];

export default function Projects() {
  // reverse projects to make it easire to add new ones.
  const reversedProjects = [...projects].reverse(); // Create a copy and reverse it

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
        {reversedProjects.map((project) => (
          <div className="project" key={project.id}>
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
                  <li className="projectTech" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="projectLinks">
                {project.url ? (
                  <a href={project.url} target="_blank">
                    <iconify-icon icon="ion:link"></iconify-icon>
                  </a>
                ) : (
                  <a href={project.url} target="_blank">
                    <iconify-icon icon="ion:link"></iconify-icon>
                    <p>&nbsp;Not Live</p>
                  </a>
                )}
                {project.github ? (
                  <a href={project.github} target="_blank">
                    <iconify-icon icon="simple-icons:github"></iconify-icon>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
