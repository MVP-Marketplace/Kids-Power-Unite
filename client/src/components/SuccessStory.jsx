import React from "react";

const SuccessStory = (props) => {
  const { age, blurb, city, image, name, state } = props;
  return (
    <>
      <img src={image} alt="recipient child with their gift" />
      <div className="featured-success-text">
        <h2>
          <b>
            {name}, {age} &mdash;
          </b>
          {city}, {state}
        </h2>
        <p id="featured-quote">"</p>
        <p id="quote-two">
          {blurb}
          <em>"</em>
        </p>
      </div>
    </>
  );
};

export default SuccessStory;
