import React from "react";
import Profile from "../../components/profile/Profile";
import NavBar from "../../components/navbar/NavBar";
import "./home.css";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <section className="home_section" id="home">
        <Profile />
      </section>
      <section className="projects_section" id="projects">
        <Projects />
      </section>
      <section className="skills_section" id="skills">
        <Skills />
      </section>
    </div>
  );
}
