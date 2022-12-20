import { Container, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/github1.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Col  className="text-center ">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/joginder-sharma-6154b71a0/">
              <img src={navIcon1} alt="Icon" />
            </a>
            <a href="https://www.facebook.com/joginder.gautam.75/">
              <img src={navIcon2} alt="Icon" />
            </a>
            <a href="https://github.com/JOGINDER571">
              <img src={navIcon3} alt="Icon" />
            </a>
          </div>
          <h2>Copyright 2022. All Rights Reserved</h2>
          <h4>~Joginder sharma</h4>
        </Col>
      </Container>
    </footer>
  );
};
