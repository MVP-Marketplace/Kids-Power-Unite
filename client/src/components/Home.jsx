import React, { useContext, useCallback } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Button, Accordion, Card } from "react-bootstrap"
import app from "../firebase";
import "../Home.css"
import logo from '../Images/kpu-logo.png'
import Vector from '../Images/Vector.png'
import Donate from '../Images/donatehero.png'
import Legos from '../Images/legos.png'

const Home = () => {


  return (
    <>
      <section className="home-hero">
        <h1 className="hero-text">Where the power to ask <br/>meets the power to give</h1>
        <Button className="hero-button">Donate</Button>
      </section>
      <section className="home-mission">
        <img className="home-logo" src={logo} alt="KPU kapow logo"/>
        <h1>Our Mission</h1>
        <p>
          We're a unique platform built to connect kids in need of a gift with
          kids looking to offer a helping hand. <br /><br/>
          What's more beautiful than kids helping kids?
        </p>
        <Button className='green-button'>Learn More</Button>
      </section>
      <section className="home-howto">
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
              How does it work?
              <img className='howto-arrow' src={Vector} alt='expand-arrow' />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className='howto-step'>
                <p className='stepNo'>01</p>
                <section className='howto-text'>
                  <p>Search the wishlist.</p>
                  <p>Find a gift for a kid just like you!</p>
                </section>
                </div>
                <div className='howto-step'>
                  <p className='stepNo'>02</p>
                  <section className='howto-text'>
                    <p>Grab your parent.</p>
                    <p>Follow the link to purchase the gift on Amazon</p>
                  </section>
                </div>
                <div className='howto-step'>
                  <p className='stepNo'>03</p>
                  <section className='howto-text'>
                    <p>Experience the power of giving!</p>
                    <p>Thanks to you, your peer will have the gift they need.</p>
                  </section>
                </div>
                <Button className='orange-button'>Find a Gift</Button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </section>
      {/* <section className="home-success">
        <h1>Featured Success Story</h1>
        <img src="#" alt="recipient child with their gift" />
        <h2>"successful recipient's name goes here" -- "recipient's city"</h2>
        <p>
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna ali."
        </p>
        <Button>Learn More</Button>
      </section> */}
      <section className="home-donate">
        <h3>Donate a Gift<br/>Experience the power of giving</h3>
        <img className='donate-img' src={Donate} alt='two people laughing at a phone screen' />
        <Link to="/donate"><Button className='give-btn'>Give</Button></Link>
      </section>
      <section className='home-refer'>
        <h3>Refer a Child to get their wish fulfilled</h3>
        <img src={Legos} alt='top view of legos in multiple colors'/>
        <Link to="/signup"><Button className='refer-btn'>Sponsor</Button></Link>
      </section>

        <div>
          <h2>FEATURED FINDS</h2>
          <p>COMING SOON!!!!</p>
          {/* to do: discuss how to display and handle featured finds section */}
          {/* <Button>Find More</Button> */}
        </div>
        <div>
          <h3>Sign Up For Our Newsletter</h3>
          <p>COMING SOON!!!!!</p>
          {/* <form action="">
            <label htmlFor="email">
              <input type="text" name="email" placeholder="enter email" />
              Email Address
            </label>
            <Button>Sign Up</Button>
          </form> */}
        </div>
      
    </>
  );
};

export default withRouter(Home);
