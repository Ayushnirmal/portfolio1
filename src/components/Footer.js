import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="text-start">
            <p className="mb-0">Copyright 2022. All Rights Reserved</p>
          </Col>
          <Col size={12} className="text-center text-sm-end mt-3">
            <div className="social-icon mt-8">
              <a href="https://www.linkedin.com/in/ayush-nirmal-854b0a1b7?utm_medium/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
