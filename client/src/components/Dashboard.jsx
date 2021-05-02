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
  const [dispOverview, setDispOverview] = useState(true);
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
  const [guardianValues, setGuardianValues] = useState({
    city: "",
    state: "",
    street: "",
    suite: "",
    zip: "",
    employer: "",
    credentials: "",
    first: "",
    last: "",
    occupation: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleGuardianChange = (event) => {
    const { name, value } = event.target;
    setGuardianValues({
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

  const handleSubmitGuardian = async (event) => {
    event.preventDefault();

    if (
      guardianValues.city &&
      guardianValues.state &&
      guardianValues.street &&
      guardianValues.suite &&
      guardianValues.zip &&
      guardianValues.employer &&
      guardianValues.credentials &&
      guardianValues.first &&
      guardianValues.last &&
      guardianValues.occupation
    ) {
      try {
        await app
          .firestore()
          .collection("professional")
          .doc(`${sponsorId}`)
          .set({ guardianValues, sponsorId });
      } catch (error) {
        alert(error);
      }
    }
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
  const updateGuardian = async () => {
    if (currentUser) {
      const response = await app
        .firestore()
        .collection("professional")
        .doc(currentUser.uid);
      const doc = await response.get();
      const data = doc.data();
      setGuardianValues({
        city: data.address.city,
        state: data.address.state,
        street: data.address.street,
        suite: data.address.suite,
        zip: data.address.zip,
        employer: data.employer,
        credentials: data.name.credentials,
        first: data.name.first,
        last: data.name.last,
        occupation: data.occupation,
      });
    }
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
    const response = app
      .firestore()
      .collection("recipient")
      .where("sponsorId", "==", currentUser);
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
                  {
                    recipient.data().values.amazonLink
                    // .split("/")[3].replaceAll("-", " ")
                  }
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
  useEffect(() => {
    updateGuardian();
  }, []);
  const overview = (
    <>
      <Row className="p-2 align-items-center">
        <Col sm={2}>
          <h5 className="all-recipients-text"> All Recipients </h5>
        </Col>
        <Col sm={2}>
          <Button
            onClick={() => setDisplayChildForm(true)}
            className="add-child-button"
          >
            {" "}
            Add a Child{" "}
          </Button>
        </Col>
        <Col sm={5}></Col>
        <Col>
          <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
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
              <th className="recipient-details-text">Gift Desired By</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </Table>
      </Row>
    </>
  );
  const settings = (
    <>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="first"
              type="text"
              defaultValue={guardianValues.first}
              onChange={handleGuardianChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="last"
              type="text"
              onChange={handleGuardianChange}
              defaultValue={guardianValues.last}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Credentials</Form.Label>
            <Form.Control
              name="credentials"
              type="text"
              onChange={handleGuardianChange}
              defaultValue={guardianValues.credentials}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label>Occupation</Form.Label>
            <Form.Control
              name="occupation"
              type="text"
              onChange={handleGuardianChange}
              defaultValue={guardianValues.occupation}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Employer</Form.Label>
            <Form.Control
              name="employer"
              type="text"
              onChange={handleGuardianChange}
              defaultValue={guardianValues.employer}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label>Street Address</Form.Label>
            <Form.Control
              name="street"
              type="text"
              onChange={handleGuardianChange}
              defaultValue={guardianValues.street}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Suite</Form.Label>
            <Form.Control
              name="suite"
              type="text"
              onChange={handleGuardianChange}
              defaultValue={guardianValues.suite}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              name="city"
              type="text"
              onChange={handleGuardianChange}
              defaultValue={guardianValues.city}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>State</Form.Label>
            <Form.Control
              name="state"
              type="text"
              onChange={handleGuardianChange}
              defaultValue={guardianValues.state}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Zip</Form.Label>
            <Form.Control
              name="zip"
              type="text"
              onChange={handleGuardianChange}
              defaultValue={guardianValues.zip}
            />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </>
  );
  return (
    <Container fluid id="dashboard-container">
      {updateModal}
      <Row className="p-3">
        <Col sm={2} className="d-none d-lg-block d-xl-block">
          <Row>
            <h5 className="account-side-text"> ACCOUNT </h5>
          </Row>
          <ButtonGroup vertical>
            <Button
              className="p-2 overview-side-text"
              variant="light"
              onClick={() => setDispOverview(true)}
            >
              <img src={overviewIcon} className="mr-2" height="35"></img>{" "}
              Overview
            </Button>
            <Button
              className="p-2 overview-side-text"
              variant="light"
              onClick={() => setDispOverview(false)}
            >
              <img src={SettingsIcon} className="mr-2" height="35"></img>{" "}
              Settings
            </Button>
          </ButtonGroup>
        </Col>
        <Col sm={10}>
          {displayChildForm ? (
            <ReferChildForm />
          ) : (
            <>{dispOverview ? overview : settings}</>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
