import { Container, Row, Col } from "react-bootstrap";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.instagram.com/kiriti5ai/">
                <BsInstagram />
              </a>
              <a href="https://github.com/Sai1710">
                <BsGithub />
              </a>
              <a href="https://www.linkedin.com/in/saikiriti-voonna-67b163213/">
                <BsLinkedin />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
