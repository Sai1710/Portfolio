import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, Url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={Url} target="_blank">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx" style={{ color: "white" }}>
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
