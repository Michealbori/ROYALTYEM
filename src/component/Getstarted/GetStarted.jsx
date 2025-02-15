import React from 'react';
import "./GetStarted.css";

export default function GetStarted() {
  return (
    <>
      <section className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-5">Get started with <span>Royalty</span> EM</h2>
            </div>

            <div className="col-lg-2 col-12 mt-auto mb-auto">
              <ul className="nav nav-pills mb-5 mx-auto justify-content-center align-items-center" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Introduction</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-youtube-tab" data-bs-toggle="pill" data-bs-target="#pills-youtube" type="button" role="tab" aria-controls="pills-youtube" aria-selected="true">How we work?</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-skill-tab" data-bs-toggle="pill" data-bs-target="#pills-skill" type="button" role="tab" aria-controls="pills-skill" aria-selected="false">Capabilities</button>
                </li>
              </ul>
            </div>

            <div className="col-lg-10 col-12">
              <div className="tab-content mt-2" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <img src="/RoyaltyEM-Logo.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-5 col-12">
                      <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                        <h4 className="mb-3">Elegant <span>Outfit</span> <br />Ideas for <span>your</span> Wedding Ceremony</h4>
                        <p>Find your dream wedding dress at RoyaltyEm—where elegance meets perfection. Explore breathtaking ball gowns, sleek mermaid silhouettes, and timeless designs. Shop effortlessly with secure sign-in, detailed product views, and seamless checkout for a magical bridal experience.</p>
                        <div className="mt-2 mt-lg-auto">
                          <a href="#" className="custom-link mb-2">
                            Learn more about us
                            <i className="bi-arrow-right ms-2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-youtube" role="tabpanel" aria-labelledby="pills-youtube-tab">
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <div className="ratio ratio-16x9">
                        <iframe src="/HowweWork.mp4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                    </div>
                    <div className="col-lg-5 col-12">
                      <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                        <h4 className="mb-3">Life in our Store</h4>
                        <p>For over three years, RoyaltyEm has been helping brides find their dream wedding dress. Our collection features exquisite designs, from timeless ball gowns to modern silhouettes, crafted for elegance and confidence. Every gown is thoughtfully curated to make your special day truly unforgettable.</p>


                        <div className="mt-2 mt-lg-auto">
                          <a href="" className="custom-link mb-2">
                            Work with us
                            <i className="bi-arrow-right ms-2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="pills-skill" role="tabpanel" aria-labelledby="pills-skill-tab">
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <img src="/capability.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-5 col-12">
                      <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                        <h4 className="mb-3">What can help you?</h4>
                        <p>For over three years, RoyaltyEm has been dedicated to creating unforgettable bridal moments, offering a stunning collection of wedding dresses designed for elegance, beauty, and confidence.</p>
                        <div className="skill-thumb mt-3">
                          <strong>Dedication</strong>
                          <span className="float-end">99%</span>
                          <div className="progress">
                            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100" style={{ width: "99%" }}></div>
                          </div>
                          <strong>Style & Elegance</strong>
                          <span className="float-end">99%</span>
                          <div className="progress">
                            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100" style={{ width: "99%" }}></div>
                          </div>
                          <strong>Luxury Materials</strong>
                          <span className="float-end">99%</span>
                          <div className="progress">
                            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100" style={{ width: "99%" }}></div>
                          </div>
                        </div>
                        <div className="mt-2 mt-lg-auto">
                          <a href="" className="custom-link mb-2">
                            Explore products
                            <i className="bi-arrow-right ms-2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
