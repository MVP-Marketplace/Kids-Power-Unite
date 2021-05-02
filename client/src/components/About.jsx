import React, { useState, useEffect, useContext, withRouter } from "react";

import "../App.css";
import { Container, Col, Row, Image } from "react-bootstrap";
import about from "./components/About";

const about = () => {
  return (
    <>
      <Row className="about-page">
        <div>
          Started by one mom, Kid Power Unites is a grassroots effort to teach
          kids the importance of giving and receiving.
        </div>
      </Row>
      <Row className="about-page">
        <div>
          Inspired by a local holiday gift-giving program, the dream behind Kid
          Power Unites is that the generosity of the holidays will empower kids
          to give year-round.{" "}
        </div>
      </Row>
      <Row>
        <div>
          {" "}
          This is a platform for adults to teach kids about giving. More
          importantly, Kid Power Unites enables kids to experience giving with
          the hope that children will be inspired to continue giving well into
          their adult years.
        </div>
      </Row>

      <Row>
        <div>
          Please help spread the word by telling organizations that help
          families with needs about our program, and by encouraging schools to
          tell their student body about this incredible gift-giving platform.
        </div>
      </Row>
    </>
  );
};

export default withRouter(about);
