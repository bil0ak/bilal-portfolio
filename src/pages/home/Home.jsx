import React from "react";
import Profile from "../../components/profile/Profile";
import NavBar from "../../components/navbar/NavBar";
import "./home.css";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";
import Education from "../../components/education/Education";
import Contact from "../../components/contact/Contact";

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
      <section className="education_section" id="education">
        <Education />
      </section>
      <section className="contact_section" id="contact">
        <Contact />
      </section>
    </div>
  );
}
