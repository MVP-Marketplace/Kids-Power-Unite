import React from "react";

const SuccessStory = (props) => {
  const { age, blurb, city, name, state } = props;
  return (
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
  );
};

export default SuccessStory;
