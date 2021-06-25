import React, { useState, useEffect, useContext, withRouter } from "react";
import Asset1 from "../Images/about_page/Asset 1 1.png";
import Asset2 from "../Images/about_page/Asset 2 1.png";
import Asset3 from "../Images/about_page/Asset 3 1.png";
import Asset5 from "../Images/about_page/Asset 5 1.png";
import KPU_Logo from "../Images/kpu-logo.png";
import "../App.css";
import { Container, Col, Row, Image, Button } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container fluid className="about-page-heading">
        <Container>
          <Row className="align-items-center p-5">
            <Col>
              <img src={KPU_Logo} width="380.49px"></img>
            </Col>
            <Col>
              <div className="about-title">About</div>
            </Col>
          </Row>
        </Container>
        <Row>
          <div className="about-border w-100 p-1"></div>
        </Row>
      </Container>
      <Container>
        <Row className="about-page p-5 mt-5 align-items-center">
          <Col md={3}>
            <img src={Asset2}></img>
          </Col>
          <Col>
            <div>
              Started by a mom, Kid Power Unites is a grassroots effort to
              teach kids the importance of giving and receiving.
            </div>
          </Col>
        </Row>
        <Row className="about-page p-5 align-items-center">
          <Col md={3}>
            <img src={Asset3}></img>
          </Col>
          <Col>
            <div>
              Inspired by a local holiday gift-giving program, the dream behind
              Kid Power Unites is that the generosity of the holiday season will
              empower kids to give year-round.
            </div>
          </Col>
        </Row>
        <Row className="about-page p-5 align-items-center">
          <Col md={3}>
            <img src={Asset1}></img>
          </Col>
          <Col>
            <div>
              This is a platform for adults to teach kids about giving. More
              importantly, Kid Power Unites enables kids to experience giving
              with the hope that children will be inspired to continue giving
              well into their adult years.
            </div>
          </Col>
        </Row>
        <Row className="about-page p-5 mb-5 align-items-center">
          <Col md={3}>
            <img src={Asset5}></img>
          </Col>
          <Col>
            <div>
              Please help spread the word by telling organizations that help
              families with needs about our program, and by encouraging schools
              to tell their student body about this incredible gift-giving
              platform.
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
