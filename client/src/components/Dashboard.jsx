import React, { useState, useEffect, useContext } from "react";

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
  Popover,
  OverlayTrigger,
  Modal,
} from "react-bootstrap";
import {
  PeopleFill,
  BookHalf,
  Gear,
  Plus,
  ChevronDown,
  ThreeDotsVertical,
  EmojiSunglassesFill,
} from "react-bootstrap-icons";
import app from "../firebase";
import { AuthContext } from "../Auth";
import overviewIcon from "../Images/Overview Icon.svg";
import SettingsIcon from "../Images/sidebar/Settings Icon.png";
import avatar1 from "../Images/avatars/Ellipse 1.png";
import avatar2 from "../Images/avatars/Ellipse 2.png";
import avatar3 from "../Images/avatars/Ellipse 4.png";
import avatar4 from "../Images/avatars/Ellipse 5.png";

const Dashboard = () => {
  const [displayChildForm, setDisplayChildForm] = useState(false);
  const [sponsorId, setSponsorId] = useState("");
  const { currentUser } = useContext(AuthContext);
  const [currentRecip, setCurrentRecip] = useState(null);
  const [show, setShow] = useState(false);
  const [list, setList] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [asc, setAsc] = useState(false);
  useEffect(() => {
    if (currentUser) {
      setSponsorId(currentUser.uid);
    }
  }, [currentUser]);
  const [values, setValues] = useState({
    nickname: "",
    amazonLink: "",
    giftReason: "",
    giftExplanation: "",
    relationship: "",
    age: "",
    gender: "",
    month: "",
    day: "",
    year: "",
    parentalConsent: false,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSort = () => {};
  const handleNameSort = async () => {
    setAsc(!asc);
    setList([]);
    const response = app.firestore().collection("recipient");
    // .where("sponsorId", "==", currentUser);
    const data = await response
      .orderBy("values.nickname", asc ? "asc" : "desc")
      .get();
    data.docs.forEach((recipient) => {
      setList((list) => [
        ...list,
        <tr
          className="align-items-center"
          key={recipient.data().values.nickname}
          item={recipient}
        >
          <td>
            <Row>
              <Col>
                <img src={avatar1} height="44"></img>
              </Col>
              <Col>
                <b className="recipient-details-text">
                  {recipient.data().values.nickname}
                </b>
              </Col>
            </Row>
          </td>

          <td>
            <Col>
              <Row>
                <a
                  className="recipient-details-text text-wrap"
                  href={recipient.data().values.amazonLink}
                  target="_blank"
                >
                  {recipient
                    .data()
                    .values.amazonLink.split("/")[3]
                    .replaceAll("-", " ")}
                </a>
              </Row>
            </Col>
          </td>
          <td>
            <Col>
              <Row>
                <b className="recipient-details-text">In Progress</b>
              </Row>
            </Col>
          </td>
          <td>
            <Col>
              <Row>
                <Col>
                  <b className="recipient-details-text">
                    {recipient.data().values.month}/
                    {recipient.data().values.day}/{recipient.data().values.year}
                  </b>
                </Col>
                <Col>
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={updateDelPopover(recipient)}
                  >
                    <Button variant="white">
                      <ThreeDotsVertical></ThreeDotsVertical>
                    </Button>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Col>
          </td>
        </tr>,
      ]);
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      values.nickname &&
      values.amazonLink &&
      values.giftReason &&
      values.giftExplanation &&
      values.relationship &&
      values.age &&
      values.gender &&
      values.month &&
      values.day &&
      values.year &&
      values.parentalConsent
    ) {
      try {
        await app
          .firestore()
          .collection("recipient")
          .doc(`${values.nickname}`)
          .set({ values, sponsorId });
      } catch (error) {
        alert(error);
      }
    }
    setValues({
      nickname: "",
      amazonLink: "",
      giftReason: "",
      giftExplanation: "",
      relationship: "",
      age: "",
      gender: "",
      month: "",
      day: "",
      year: "",
      parentalConsent: false,
    });
    setShow(false);
    deleteRecip(currentRecip);
  };

  const updateModal = (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Reipient</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nickname</Form.Label>
            <Form.Control
              name="nickname"
              type="text"
              defaultValue={values.nickname}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
              name="age"
              type="text"
              onChange={handleChange}
              defaultValue={values.age}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control
              name="gender"
              type="text"
              onChange={handleChange}
              defaultValue={values.gender}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Amazon Link</Form.Label>
            <Form.Control
              name="amazonLink"
              type="text"
              onChange={handleChange}
              defaultValue={values.amazonLink}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Gift Explanation</Form.Label>
            <Form.Control
              name="giftExplanation"
              type="text"
              onChange={handleChange}
              defaultValue={values.giftExplanation}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Gift Reason</Form.Label>
            <Form.Control
              name="giftReason"
              type="text"
              onChange={handleChange}
              defaultValue={values.giftReason}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Month</Form.Label>
            <Form.Control
              name="month"
              type="text"
              onChange={handleChange}
              defaultValue={values.month}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Day</Form.Label>
            <Form.Control
              name="day"
              type="text"
              onChange={handleChange}
              defaultValue={values.day}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Year</Form.Label>
            <Form.Control
              name="year"
              type="text"
              onChange={handleChange}
              defaultValue={values.year}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Relationship</Form.Label>
            <Form.Control
              name="relationship"
              type="text"
              onChange={handleChange}
              defaultValue={values.relationship}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Parental Consent</Form.Label>
            <Form.Control
              name="parentalConsent"
              type="text"
              onChange={handleChange}
              defaultValue={values.parentalConsent}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
  const deleteRecip = async (recip) => {
    const response = await app
      .firestore()
      .collection("recipient")
      .doc(recip.data().values.nickname)
      .delete();
    setList([]);
    fetchRecips();
  };
  const updateRecip = async (recip) => {
    setCurrentRecip(recip);
    setValues({
      nickname: recip.data().values.nickname,
      amazonLink: recip.data().values.amazonLink,
      giftReason: recip.data().values.giftReason,
      giftExplanation: recip.data().values.giftExplanation,
      relationship: recip.data().values.relationship,
      age: recip.data().values.age,
      gender: recip.data().values.gender,
      month: recip.data().values.month,
      day: recip.data().values.day,
      year: recip.data().values.year,
      parentalConsent: recip.data().values.parentalConsent,
    });
    console.log(values);
    handleShow();
  };
  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        <Col>
          <Row>
            <Button
              variant="white"
              className="sort-filter-text"
              onClick={handleNameSort}
            >
              Name
            </Button>
          </Row>
        </Col>
      </Popover.Content>
    </Popover>
  );
  const updateDelPopover = (recip) => {
    return (
      <Popover id="popover-basic">
        <Popover.Content>
          <Col>
            <Row>
              <Button
                variant="white"
                className="sort-filter-text"
                onClick={() => updateRecip(recip)}
              >
                Update
              </Button>
            </Row>
            <Row>
              <Button
                variant="white"
                className="sort-filter-text"
                onClick={() => deleteRecip(recip)}
              >
                Delete
              </Button>
            </Row>
          </Col>
        </Popover.Content>
      </Popover>
    );
  };

  const fetchRecips = async () => {
    const response = app.firestore().collection("recipient");
    // .where("sponsorId", "==", currentUser);
    const data = await response.get();
    data.docs.forEach((recipient) => {
      setList((list) => [
        ...list,
        <tr
          className="align-items-center"
          key={recipient.data().values.nickname}
          item={recipient}
        >
          <td>
            <Row>
              <Col>
                <img src={avatar1} height="44"></img>
              </Col>
              <Col>
                <b className="recipient-details-text">
                  {recipient.data().values.nickname}
                </b>
              </Col>
            </Row>
          </td>

          <td>
            <Col>
              <Row>
                <a
                  className="recipient-details-text text-wrap"
                  href={recipient.data().values.amazonLink}
                  target="_blank"
                >
                  {recipient
                    .data()
                    .values.amazonLink.split("/")[3]
                    .replaceAll("-", " ")}
                </a>
              </Row>
            </Col>
          </td>
          <td>
            <Col>
              <Row>
                <b className="recipient-details-text">In Progress</b>
              </Row>
            </Col>
          </td>
          <td>
            <Col>
              <Row>
                <Col>
                  <b className="recipient-details-text">
                    {recipient.data().values.month}/
                    {recipient.data().values.day}/{recipient.data().values.year}
                  </b>
                </Col>
                <Col>
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={updateDelPopover(recipient)}
                  >
                    <Button variant="white">
                      <ThreeDotsVertical></ThreeDotsVertical>
                    </Button>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Col>
          </td>
        </tr>,
      ]);
    });
  };
  useEffect(() => {
    fetchRecips();
  }, []);
  return (
    <Container fluid id="dashboard-container">
      {updateModal}
      <Row className="p-3">
        <Col sm={2} className="d-none d-lg-block d-xl-block">
          <Row>
            <h5 className="account-side-text"> ACCOUNT </h5>
          </Row>
          <ButtonGroup vertical>
            <Row className="p-2 bg-light overview-side-text">
              <img src={overviewIcon} className="mr-2" height="35"></img>{" "}
              Overview
            </Row>
            <Row className="p-2 overview-side-text">
              <img src={SettingsIcon} className="mr-2" height="35"></img>{" "}
              Settings
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
                    className="add-child-button"
                    s
                  >
                    {" "}
                    Add a Child{" "}
                  </Button>
                </Col>
                <Col sm={5}></Col>
                <Col>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={popover}
                  >
                    <Button
                      variant="white"
                      onClick={handleSort}
                      className="sort-filter-text"
                    >
                      {" "}
                      Sort <ChevronDown> </ChevronDown>
                    </Button>
                  </OverlayTrigger>
                </Col>
              </Row>
              <Row>
                <Table hover>
                  <thead>
                    <tr>
                      <th className="recipient-details-text">Child</th>
                      <th className="recipient-details-text">Gift</th>
                      <th className="recipient-details-text">Status</th>
                      <th className="recipient-details-text">
                        Gift Desired By
                      </th>
                    </tr>
                  </thead>
                  <tbody>{list}</tbody>
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
