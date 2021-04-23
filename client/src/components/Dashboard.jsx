import React, { useState } from "react";
import ReferChildForm from "./ReferChildForm";
import { ButtonGroup } from "react-bootstrap";
import {
  Container,
  Button,
  Col,
  Row,
  Form,
  Image,
  Alert,
  Table,
} from "react-bootstrap";
import {
  PeopleFill,
  BookHalf,
  Gear,
  Plus,
  SortUp,
  FunnelFill,
  ThreeDotsVertical,
  EmojiSunglassesFill,
} from "react-bootstrap-icons";
import app from "../firebase";

const Dashboard = () => {
  const [displayChildForm, setDisplayChildForm] = useState(false);

  return (
    <Container fluid id="dashboard-container">
      <Row className="p-3">
        <Col sm={2} className="d-none d-lg-block d-xl-block">
          <Row>
            <h5 className="account-side-text"> ACCOUNT </h5>
          </Row>
          <ButtonGroup vertical>
            <Row className="p-2 bg-light overview-side-text">
              <PeopleFill className="mr-2"> </PeopleFill> {"   "}Overview
            </Row>
            <Row className="p-2 overview-side-text">
              <BookHalf className="mr-2"> </BookHalf> {"   "}Contact
            </Row>
            <Row className="p-2 overview-side-text">
              <Gear className="mr-2"> </Gear> {"   "}Settings
            </Row>
          </ButtonGroup>
        </Col>
        <Col sm={10}>
          {displayChildForm ? (
            <ReferChildForm />
          ) : (
            <>
              <Row className="p-2 align-items-center">
                <Col sm={2}>
                  <h5 className="all-recipients-text"> All Recipients </h5>
                </Col>
                <Col sm={2}>
                  <Button
                    onClick={() => setDisplayChildForm(true)}
                    variant="secondary"
                    className="add-child-button"
                  >
                    {" "}
                    Add Child <Plus> </Plus>{" "}
                  </Button>
                </Col>
                <Col sm={5}></Col>
                <Col>
                  <Button variant="white" className="sort-filter-text">
                    {" "}
                    <SortUp> </SortUp> Sort{" "}
                  </Button>
                </Col>
                <Col>
                  <Button variant="white" className="sort-filter-text">
                    {" "}
                    <FunnelFill> </FunnelFill> Filter{" "}
                  </Button>
                </Col>
              </Row>
              <Row>
                <Table hover>
                  <thead>
                    <tr>
                      <th className="recipient-details-text">
                        Recipient Details
                      </th>
                      <th className="recipient-details-text">
                        Child's Nickname
                      </th>
                      <th className="recipient-details-text">
                        Date Gift Desired
                      </th>
                      <th className="recipient-details-text">
                        Priority (by date)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Row>
                          <Col>
                            <EmojiSunglassesFill style={{ width: 44 }}>
                              {" "}
                            </EmojiSunglassesFill>
                          </Col>
                          <Col>
                            <Row>
                              <b className="recipient-details-text">
                                Latest Update
                              </b>
                            </Row>
                            <Row>
                              <small className="recipient-details-text-light">
                                Updated 1 day ago
                              </small>
                            </Row>
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Col>
                          <Row>
                            <b className="recipient-details-text">Pellegrino</b>
                          </Row>
                          <Row>
                            <small className="recipient-details-text-light">
                              on 24.05.2019
                            </small>
                          </Row>
                        </Col>
                      </td>
                      <td>
                        <Col>
                          <Row>
                            <b className="recipient-details-text">
                              May 26, 2021
                            </b>
                          </Row>
                          <Row>
                            <small className="recipient-details-text-light">
                              6:30 PM
                            </small>
                          </Row>
                        </Col>
                      </td>
                      <td>
                        <Row>
                          <Alert className="recipient-details-text">Low</Alert>
                          <ThreeDotsVertical></ThreeDotsVertical>
                        </Row>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
