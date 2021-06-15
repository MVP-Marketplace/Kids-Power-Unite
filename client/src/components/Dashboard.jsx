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
import ProfilePictures from "./ProfilePictures.jsx"
import group83 from "../Images/group83.png";
import group84 from "../Images/group84.png";

const Dashboard = () => {
  const [displayChildForm, setDisplayChildForm] = useState(false);
  const [displayProfileSelect,setDisplayProfileSelect] = useState(false);
  const [dispOverview, setDispOverview] = useState(true);
  const [sponsorId, setSponsorId] = useState("");
  const { currentUser } = useContext(AuthContext);
  const [currentRecip, setCurrentRecip] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [show, setShow] = useState(false);
  const [list, setList] = useState([]);
  const handleCloseSuccess = () => setShowSuccess(false);
  const handleShowSuccess = () => setShowSuccess(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [asc, setAsc] = useState(false);
  const [profilePics, setProfilePics] = useState();
  const [selectedPic,setSelectedPic] = useState("");

  let storageRef = app.firebase_.storage().ref();
  const getImage = () => {
    let imageArray = [];
    for (let i = 1; i <= 9; i++) {
      let imageRef = storageRef.child(`Profile Images/profile${i}.png`);
      imageRef
        .getDownloadURL()
        .then((url) => {
          imageArray.push(url);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setProfilePics(imageArray);
  };

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
    credentials: "",
    occupation: "",
    employer: "",
    employerStreet: "",
    employerSuite: "",
    employerCity: "",
    employerState: "",
    employerZip: "",
    deliveryStreet: "",
    deliverySuite: "",
    deliveryCity: "",
    deliveryState: "",
    deliveryZip: "",
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
  const formSuccess = () => {
    setDisplayChildForm(false);
    handleShowSuccess();
  };
  const handleSort = () => {};
  const handleNameSort = async () => {
    setAsc(!asc);
    setList([]);
    const response = app
      .firestore()
      .collection("recipient")
      .where("sponsorId", "==", currentUser);
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
                <img src={recipient.data().values.profilePicture} height="44"></img>
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
    try {
      await app
        .firestore()
        .collection("professional")
        .doc(app.auth().currentUser.uid)
        .update({
          employerInfo: {
            credentials: guardianValues.credentials,
            occupation: guardianValues.occupation,
            employer: guardianValues.employer,
            street: guardianValues.employerStreet,
            suite: guardianValues.employerSuite,
            city: guardianValues.employerCity,
            state: guardianValues.employerState,
            zip: guardianValues.employerZip,
          },
          deliveryAddress: {
            street: guardianValues.deliveryStreet,
            suite: guardianValues.deliverySuite,
            city: guardianValues.deliveryCity,
            state: guardianValues.deliveryState,
            zip: guardianValues.deliveryZip,
          },
        });
    } catch (error) {
      alert(error);
    }
  };

  const updateModal = (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Recipient</Modal.Title>
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

  const successModal = (
    <Modal show={showSuccess} onHide={handleCloseSuccess}>
      <Modal.Body
        style={{
          backgroundImage: `url(${group83}), url(${group84})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "600px",
        }}
      >
        <h1 style={{color:'gold',marginTop:'500px'}}>Child successfully Added</h1>
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
    const response = await app
      .firestore()
      .collection("professional")
      .doc(currentUser.uid);
    const doc = await response.get();
    if (doc.exists) {
      const data = doc.data();

      setGuardianValues({
        credentials: data.employerInfo.credentials,
        occupation: data.employerInfo.occupation,
        employer: data.employerInfo.employer,
        employerStreet: data.employerInfo.street,
        employerSuite: data.employerInfo.suite,
        employerCity: data.employerInfo.city,
        employerState: data.employerInfo.state,
        employerZip: data.employerInfo.zip,
        deliveryStreet: data.deliveryAddress.street,
        deliverySuite: data.deliveryAddress.suite,
        deliveryCity: data.deliveryAddress.city,
        deliveryState: data.deliveryAddress.state,
        deliveryZip: data.deliveryAddress.zip,
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
      .where("sponsorId", "==", currentUser.uid);
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
                <img src={recipient.data().values.profilePicture} height="44"></img>
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
    getImage();
  }, []);

  useEffect(() => {
    updateGuardian();
  }, []);

  useEffect(() => {
    setDisplayProfileSelect(false)
  },[selectedPic])
  console.log(selectedPic)
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
      <div className="dash-grn-border mt-3 mb-3">
        <h2 className="dash-edit-account text-center">Edit Account</h2>
      </div>
      <Form onSubmit={handleSubmitGuardian}>
        <Form.Row>
          <Col sm={6} className="text-left offset-2">
            <div className="dash-edit-headers mt-5 mb-5">
              Guardian Advocate Information
            </div>
            <Form.Group as={Row}>
              <Form.Label className="dash-edit-labels" column sm="4">
                Job Title
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  name="occupation"
                  type="text"
                  defaultValue={guardianValues.occupation}
                  onChange={handleGuardianChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label className="dash-edit-labels" column sm="4">
                Credentials
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  name="credentials"
                  type="text"
                  onChange={handleGuardianChange}
                  defaultValue={guardianValues.credentials}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label className="dash-edit-labels" column sm="4">
                Employer Name
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  name="employer"
                  type="text"
                  onChange={handleGuardianChange}
                  defaultValue={guardianValues.employer}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label className="dash-edit-labels" column sm="4">
                Employer Street Address
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  name="employerStreet"
                  type="text"
                  onChange={handleGuardianChange}
                  defaultValue={guardianValues.employerStreet}
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label className="dash-edit-labels" column sm="4">
                Floor, Suite, or Room No.
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  name="employerSuite"
                  type="text"
                  onChange={handleGuardianChange}
                  defaultValue={guardianValues.employerSuite}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label className="dash-edit-labels" column sm="4">
                City
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  name="employerCity"
                  type="text"
                  onChange={handleGuardianChange}
                  defaultValue={guardianValues.employerCity}
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label className="dash-edit-labels" column sm="4">
                State
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  name="employerState"
                  type="text"
                  onChange={handleGuardianChange}
                  defaultValue={guardianValues.employerState}
                />{" "}
              </Col>
            </Form.Group>

            <Form.Group className="mb-5" as={Row}>
              <Form.Label className="dash-edit-labels" column sm="4">
                Zip Code
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  name="employerZip"
                  type="text"
                  onChange={handleGuardianChange}
                  defaultValue={guardianValues.employerZip}
                />{" "}
              </Col>
            </Form.Group>
            <div className="dash-edit-headers pt-5 mb-5 border-top">
              Gift Delivery Address
            </div>
            <Form.Group as={Row}>
              <Form.Label className="dash-edit-labels" column sm="4">
                Street Address
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  name="deliveryStreet"
                  type="text"
                  onChange={handleGuardianChange}
                  defaultValue={guardianValues.deliveryStreet}
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label className="dash-edit-labels" column sm="4">
                Suite, Floor, or Room No.
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  name="deliverySuite"
                  type="text"
                  onChange={handleGuardianChange}
                  defaultValue={guardianValues.deliverySuite}
                />{" "}
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label className="dash-edit-labels" column sm="4">
                City
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  name="deliveryCity"
                  type="text"
                  onChange={handleGuardianChange}
                  defaultValue={guardianValues.deliveryCity}
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label className="dash-edit-labels" column sm="4">
                State
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  name="deliveryState"
                  type="text"
                  onChange={handleGuardianChange}
                  defaultValue={guardianValues.deliveryState}
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label className="dash-edit-labels" column sm="4">
                Zip Code
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  name="deliveryZip"
                  type="text"
                  onChange={handleGuardianChange}
                  defaultValue={guardianValues.deliveryZip}
                />{" "}
              </Col>
            </Form.Group>
            <Row className="justify-content-center pt-5">
              <Button variant="primary" type="submit">
                Submit Changes
              </Button>
            </Row>
          </Col>
        </Form.Row>
      </Form>
    </>
  );

  const displayProfileSelectPage = () =>{
    setDisplayProfileSelect(true)
  }


  return (
    <Container fluid id="dashboard-container">
      {updateModal}
      {successModal}
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
            <> 
            {
                displayProfileSelect ? (
                <ProfilePictures pictures={profilePics} setSelectedPic={setSelectedPic}></ProfilePictures> ): 
                <ReferChildForm formSuccess={formSuccess} picture={selectedPic} profileDisplay={()=>{displayProfileSelectPage()}} setDisplayChildForm={setDisplayChildForm} />
            }
            </> 
          ) : (
            <>{dispOverview ? overview : settings}</>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
