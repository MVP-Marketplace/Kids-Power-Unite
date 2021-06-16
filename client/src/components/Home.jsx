import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Button } from "react-bootstrap";
import FeaturedItems from "./FeaturedItems";
import SuccessStory from "./SuccessStory";
import "../Home.css";
import logo from "../Images/kpu-logo.png";
import Donate from "../Images/donatehero.png";
import Legos from "../Images/legos.png";
import app from "../firebase";

const Home = () => {
  const [items, setItems] = useState();
  const [success, setSuccess] = useState();

  useEffect(() => {
    getSuccess();
  }, []);

  useEffect(() => {
    getFeaturedItems();
  }, []);

  const getSuccess = async () => {
    await app
      .firestore()
      .collection("success")
      .get()
      .then((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
          let child = doc.data();
          data.push(child);
        });
        setSuccess(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getFeaturedItems = async () => {
    await app
      .firestore()
      .collection("featured")
      .get()
      .then((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
          let child = doc.data();
          data.push(child);
        });
        setItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="home-page-container">
        <section className="home-hero">
          <h1 className="hero-text">
            Where the power to ask <br />
            meets the power to give
          </h1>
          <Button className="hero-button" href="/donate">
            Donate
          </Button>
        </section>
        <section className="home-mission">
          <img className="home-logo" src={logo} alt="KPU kapow logo" />
          <div className="mission-text">
            <p id="bold">
              We're Creating Opportunities For Kids
              <br />
              To Offer Each Other A Helping Hand
            </p>
            <p id="mission-para">
              Sometimes in life we need to ask for help, and other times we have
              an abundance so we can give. Learning to do both takes courage.
            </p>
            <p id="mission-para">
              On the Kid Power Unites platform, find opportunities to give to
              another kid who needs something.
            </p>
            <div className="green-button-container">
              <Button className="green-button" href="/about">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section className="home-howto">
          <h2 className="section-header">How Does It Work?</h2>
          <section className="how-tos">
            <div className="howto-step">
              <p className="stepNo">01</p>
              <section className="howto-text">
                <p>Search the wishlist</p>
                <p id="howto-text-one">Find a gift for a kid just like you!</p>
              </section>
            </div>
            <div className="howto-step">
              <p className="stepNo">02</p>
              <section className="howto-text">
                <p>Grab your parent</p>
                <p id="howto-text-two">
                  Follow the link to purchase the gift you chose on Amazon.
                </p>
              </section>
            </div>
            <div className="howto-step">
              <p className="stepNo">03</p>
              <section className="howto-text">
                <p>Experience the power of giving</p>
                <p id="howto-text-three">
                  Thanks to you, your peer will have the gift they need.
                </p>
              </section>
            </div>
          </section>
          <Button className="orange-button" href="/donate">
            Find a Gift
          </Button>
        </section>
        <section className="home-featured">
          <h2 className="section-header">Featured Success Story</h2>
          <div className="featured-success-info">
            {success && success !== undefined
              ? success.map((child, i) => {
                  return <SuccessStory key={i} {...child} />;
                })
              : null}
          </div>
        </section>
        <div className="home-quicklinks">
          <section className="home-donate">
            <h3>
              Donate a Gift.
              <br />
              Experience the power of giving.
            </h3>
            <div className="donate-content">
              <img
                className="donate-img"
                src={Donate}
                alt="two people laughing at a phone screen"
              />
              <Button className="btn donate-btn" href="/donate">
                Give
              </Button>
            </div>
          </section>
          <section className="home-refer">
            <h3>
              Refer a Child. <br /> Help them get their wish fulfilled.
            </h3>
            <img src={Legos} alt="top view of legos in multiple colors" />
            <Button className="btn refer-btn" href="/referchild">
              Sponsor
            </Button>
          </section>
        </div>
        <section className="featured-finds">
          <h2 className="section-header">Featured Finds</h2>
          <div className="featured-finds-text-container">
            <p className="featured-finds-text">
              We've done the research to recommend great products for families
              and kids at great prices! Consider purchasing an additional item
              for a child in need.
            </p>
          </div>

          {items && items !== undefined
            ? items.map((child, i) => {
                return <FeaturedItems key={i} {...child} />;
              })
            : null}
        </section>
      </div>
    </>
  );
};

export default withRouter(Home);
