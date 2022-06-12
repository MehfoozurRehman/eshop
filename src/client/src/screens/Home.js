import React from "react";
import newsletterBanner from "../assets/newsletterBanner.png";

export default function Home() {
  return (
    <>
      <div className="newsletter__section">
        <img
          src={newsletterBanner}
          alt="newsletterBanner"
          className="newsletter__section__img"
        />
        <div className="newsletter__section__overlay">
          <div className="newsletter__section__overlay__left">
            Subscribe to our newsletter and receive exclusive offers every week
          </div>
          <form className="newsletter__section__overlay__right">
            <input
              type="text"
              className="newsletter__section__overlay__right__input"
              placeholder="Enter your email"
            />
            <button className="newsletter__section__overlay__right__button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
