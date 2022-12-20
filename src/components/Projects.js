import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img4.png";
import projImg2 from "../assets/img/weather.jpg";
import projImg3 from "../assets/img/api.jpg";
import projImg4 from "../assets/img/chatapp.webp";
import projImg5 from "../assets/img/foodapp.jpg";
import projImg6 from "../assets/img/dsa.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "ChatApp",
      description: "Design & Development by using React Js",
      imgUrl: projImg4,
      projectLink:"https://confident-heisenberg-916337.netlify.app",
    },
    {
      title: "Weather App",
      description: "By using HTML,CSS JAVASCRIPT",
      imgUrl: projImg2,
      projectLink:"https://github.com/JOGINDER571/weatherapp.github.io.git",
    },
    {
      title: "Men100mApi",
      description: "By using JAVASCRIPT",
      imgUrl: projImg3,
      projectLink:"https://github.com/JOGINDER571/men100m-api.git",
    },
    {
      title: "Tic-Tac-Toe",
      description: "Design & Development in c++",
      imgUrl: projImg1,
      projectLink:"https://github.com/JOGINDER571/Tic_Tac_Toe_game.git",
    },
    {
      title: "Food Ordering App",
      description: "By using MERN STACK",
      imgUrl: projImg5,
      // projectLink:
    },
    {
      title: "Data Structure & Algorithm in c++",
      description: "All code in single place",
      imgUrl: projImg6,
      projectLink:"https://github.com/JOGINDER571/dsa-practice.git",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
