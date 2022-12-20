import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,projectLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br />
          <a href={projectLink}><button className="btnn">View Project</button></a>
        </div>
      </div>
    </Col>
  )
}
