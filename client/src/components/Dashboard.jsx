import React from "react";
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
} from "react-bootstrap-icons";
import app from "../firebase";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={2}>
          <Row>
            <h5> ACCOUNT </h5>
          </Row>
          <ButtonGroup vertical>
            <Button>
              {" "}
              <PeopleFill> </PeopleFill> Overview{" "}
            </Button>
            <Button>
              {" "}
              <BookHalf> </BookHalf> Contact{" "}
            </Button>
            <Button>
              {" "}
              <Gear className="bg-primary"> </Gear> Settings{" "}
            </Button>
          </ButtonGroup>
        </Col>
        <Col sm={10}>
          <Row>
            <Col sm={2}>
              <h5> All Recipients </h5>
            </Col>
            <Col sm={2}>
              <Button>
                {" "}
                Add Child <Plus> </Plus>{" "}
              </Button>
            </Col>
            <Col sm={6}></Col>
            <Col>
              <Button variant="light">
                {" "}
                <SortUp> </SortUp> Sort{" "}
              </Button>
            </Col>
            <Col>
              <Button variant="light">
                {" "}
                <FunnelFill> </FunnelFill> Filter{" "}
              </Button>
            </Col>
          </Row>
          <Row>
            <Table hover>
              <thead>
                <tr>
                  <th>Recipient Details</th>
                  <th>Child's Nickname</th>
                  <th>Date Gift Desired</th>
                  <th>Priority (by date)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Col>
                      <Image src="" roundedCircle />
                    </Col>
                    <Col>
                      <Row>
                        <b>Latest Update</b>
                      </Row>
                      <Row>
                        <small>Updated 1 day ago</small>
                      </Row>
                    </Col>
                  </td>
                  <td>
                    <Col>
                      <Row>
                        <b>Pellegrino</b>
                      </Row>
                      <Row>
                        <small>on 24.05.2019</small>
                      </Row>
                    </Col>
                  </td>
                  <td>
                    <Col>
                      <Row>
                        <b>May 26, 2021</b>
                      </Row>
                      <Row>
                        <small>6:30 PM</small>
                      </Row>
                    </Col>
                  </td>
                  <td>
                    <Row>
                      <Alert>Low</Alert>
                      <ThreeDotsVertical></ThreeDotsVertical>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Col>
                      <Image src="" roundedCircle />
                    </Col>
                    <Col>
                      <Row>
                        <b>Latest Update</b>
                      </Row>
                      <Row>
                        <small>Updated 1 day ago</small>
                      </Row>
                    </Col>
                  </td>
                  <td>
                    <Col>
                      <Row>
                        <b>Pellegrino</b>
                      </Row>
                      <Row>
                        <small>on 24.05.2019</small>
                      </Row>
                    </Col>
                  </td>
                  <td>
                    <Col>
                      <Row>
                        <b>May 26, 2021</b>
                      </Row>
                      <Row>
                        <small>6:30 PM</small>
                      </Row>
                    </Col>
                  </td>
                  <td>
                    <Row>
                      <Alert>Low</Alert>
                      <ThreeDotsVertical></ThreeDotsVertical>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Col>
                      <Image src="" roundedCircle />
                    </Col>
                    <Col>
                      <Row>
                        <b>Latest Update</b>
                      </Row>
                      <Row>
                        <small>Updated 1 day ago</small>
                      </Row>
                    </Col>
                  </td>
                  <td>
                    <Col>
                      <Row>
                        <b>Pellegrino</b>
                      </Row>
                      <Row>
                        <small>on 24.05.2019</small>
                      </Row>
                    </Col>
                  </td>
                  <td>
                    <Col>
                      <Row>
                        <b>May 26, 2021</b>
                      </Row>
                      <Row>
                        <small>6:30 PM</small>
                      </Row>
                    </Col>
                  </td>
                  <td>
                    <Row>
                      <Alert>Low</Alert>
                      <ThreeDotsVertical></ThreeDotsVertical>
                    </Row>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
