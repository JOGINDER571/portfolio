import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Intern from "../assets/img/project-img3.png";
import "animate.css";
// import TrackVisibility from "react-on-screen";

export const Experience = () => {
  return (
    <section className="project">
      <Container>
        <h2>Experience</h2>
        <div className="box">
          <div className="img_section exp-imgbx">
            <img className="img" src={Intern} alt="image" />
            <div className="exp-txtx">
              <h4>Internship</h4>
              <span>MERN stack development</span>
              <br /> 
              <a href="https://xcitedu.com">
                <button className="btnn">View Project</button>
              </a>
            </div>
          </div>
          <div className="content">
            <h4>About Internship</h4>
            <p>
              Hello myself Joginder,I have done Three months internship in Xcit
              Education Worldwide Jan 2022 to March 2022. During this Internship
              the technology I have worked on is MERN stack. <br />
              Xcite Education is an online learning platform that provides both
              generalized as well as academic enhancement in skills. Xcite
              Education focuses on building a strong base for the students
              ranging from 6 grade to 12 grade.
            </p>
          </div>
        </div>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
