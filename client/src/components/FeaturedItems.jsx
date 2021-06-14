import React from "react";
import "../Home.css";

const FeaturedItems = (props) => {
  
  const { amazonLink, image, name } = props;

  return (
    <div className="featured-finds-cards">
      <a
        href={amazonLink}
        target="_blank"
        className="featured-card-link"
      >
        <div className="featured-card">
          <img src={image} alt={name} />
          <p>
            <br /> {name}
          </p>
        </div>
      </a>
    </div>
  );
};

export default FeaturedItems;
