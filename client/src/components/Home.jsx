import React, { useContext, useCallback } from "react"
import { withRouter, Redirect } from "react-router"
import app from "../firebase"


const Home = () => {
    return (
        <>
            <section className='home-hero'>
                <h1>Where the power to ask meets the power to give</h1>
                <button>Donate</button>
            </section>
            <section className='home-howto'>
                <h1>How does it work?</h1>
                <p>Children age 18 and under in a disadvantaged situation can apply for a wishlist item with the guidance of a supervising professional, such as a case manager. <br />
                They ensure that the wishlist gift is need-based and that parental approval was granted. Supervising proffessionals are asked to complete a grant application form on behalf of a child applicant.</p>
                <p>The application includes a recipient avatar and nicname for privacy, a brief bio and selecting an item on Amazon for their wish. <br />
                Upon application review, KPU generates a profile and wishlist link for each gift request.</p>
                <p>The donor searches our wishlist page, learns more about the recipient and why the item is important to them. <br/>
                The donor selects a wish to fulfill and purchases the gift with parent supervision.</p>
                <p>Gifts are sent via Amazon to the supervising professional's verified address for distribution to ensure privacy.<br/>
                We can't wait for your wish to be granted!</p>
                <button>Learn More</button>
            </section>
            <section className='home-mission'>
                <h1>Our Mission</h1>
                <p>We're a unique platform built to connect kids in need of a gift with kids lookingt o offer a helping hand. <br/>
                What's more beautiful than kids helping kids?</p>
                <button>Learn More</button>
            </section>
            <section className='home-success'>
                <h1>Featured Success Story</h1>
                <img src='' alt='recipient child with their gift' />
                <h2>"successful recipient's name goes here" -- "recipient's city"</h2>
                <p>"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali."</p>
                <button>Learn More</button>
            </section>
            <section className="home-banner">
                <h1>GET INVOLVED</h1>
            </section>
            <section style={{ backgroundImage: `#` }}>
                <h3>Donate a Gift Experience the power of giving</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                deserunt distinctio nam commodi, nobis voluptatem culpa autem.
                </p>
                <button>Give</button>
            </section>
            <section style={{ backgroundImage: `#` }}>
                <h3>Refer a Child to get their wish fulfilled</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                deserunt distinctio nam commodi, nobis voluptatem culpa autem.
                </p>
                <button>Get Started</button>
            </section>
            <section>
                <h2>FEATURED FINDS</h2>
                {/* to do: discuss how to display and handle featured finds section */}
                <button>Find More</button>
            </section>
            <section>
                <h3>Sign Up For Our Newsletter</h3>
                <label htmlFor="email">
                    <input type="text" name="email" placeholder="enter email" />
                    Email Address
                </label>
                <button>Sign Up</button>
            </section>
        </>
    )
}


export default Home