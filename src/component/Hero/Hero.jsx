import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section class="slick-slideshow">
      <div className="slick-custom">
        <video autoPlay muted loop playsInline className="img-fluid">
          <source src="/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="slick-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-10">
                <h1 className="slick-title">Style That Speaks</h1>
                <p className="lead text-white mt-lg-3 mb-lg-5">
                  Find your perfect wedding dress with our exclusive collection
                  of elegant and timeless designs.
                </p>
                <a href="about.html" className="btn custom-btn">
                  Work With us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
