import React, { useContext, useCallback } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Button, Accordion, Card } from "react-bootstrap";
import app from "../firebase";
import "../Home.css";
import logo from "../Images/kpu-logo.png";
import Vector from "../Images/Vector.png";
import Donate from "../Images/donatehero.png";
import Legos from "../Images/legos.png";
import FeaturedSuccess from "../Images/featured-success.png";
import ProductOne from "../Images/product-one.png";
import ProductTwo from "../Images/product-two.png";

const Home = () => {
  return (
    <>
      <section className="home-hero">
        <h1 className="hero-text">
          Where the power to ask <br />
          meets the power to give
        </h1>
        <Button className="hero-button">Donate</Button>
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
          <Button className="green-button">Learn More</Button>
        </div>
      </section>
      <section className="home-howto">
        <h2 className="section-header">How Does It Work?</h2>
        <Card.Body>
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
          <Button className="orange-button">Find a Gift</Button>
        </Card.Body>
      </section>
      <section className="home-featured">
        <h2 className="section-header">
          Featured Success Story (COMING SOON!!!!)
        </h2>
        <div className="featured-success-info">
          <img src={FeaturedSuccess} alt="recipient child with their gift" />
          <div className="featured-success-text">
            <h2>
              <b>Marci, 16 &mdash;</b> Boston, MA
            </h2>
            <p id="featured-quote">"</p>
            <p id="quote-two">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna ali.<em>"</em>
            </p>
          </div>
        </div>
        {/* to do: discuss how to display and handle featured finds section */}
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
            <Link className="btn donate-btn" to="/donate">
              Give
            </Link>
          </div>
        </section>
        <section className="home-refer">
          <h3>
            Refer a Child. <br /> Help them get their wish fulfilled.
          </h3>
          <img src={Legos} alt="top view of legos in multiple colors" />
          <Link className="btn refer-btn" to="/signup">
            Sponsor
          </Link>
        </section>
      </div>
      <section className="featured-finds">
        <h2 className="section-header">Featured Finds (COMING SOON!!!!)</h2>
        <p className="featured-finds-text">
          We've done the research to recommend great products for families and
          kids at great prices! Consider purchasing an additional item for a
          child in need.
        </p>
        <div className="featured-finds-cards">
          <div className="featured-card">
            <img src={ProductOne} alt="Product Image"></img>
            <p>
              Welly <br /> Braverly Bandages for Kids
            </p>
          </div>
          <div className="featured-card">
            <img src={ProductTwo} alt="Product Image"></img>
            <p id="featured-card-two">Fidget Toy</p>
          </div>
        </div>
      </section>
      <section className="home-newsletter">
        <h3>Sign Up For Our Newsletter</h3>
        <p>COMING SOON!!!!!</p>
        {/* <form action="">
            <label htmlFor="email">
              <input type="text" name="email" placeholder="enter email" />
              Email Address
            </label>
            <Button>Sign Up</Button>
          </form> */}
      </section>
    </>
  );
};

export default withRouter(Home);
