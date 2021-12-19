import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="hero-area">
        <div className="banner" id="home">
          <div className="container">
            <div className="row banner-text">
              <div className="slider-info col-lg-6">
                <div className="agileinfo-logo mt-lg-5 pt-md-3">
                  <h2>Welcome To Our Rental Website </h2>
                  <p>
                    Integer pulvinar leo id viverra feugiat. Pellentesque libero
                    justo, semper at tempus vel, ultrices in ligula. Nulla
                    sollicit udin velit. Sed porttitor orci vel fermentum
                    maximus. Sed Curabitur ut turpis massa leo id viverra.
                  </p>
                </div>
                <a className="btn mr-2 text-capitalize" href="#popup1">
                  read more{" "}
                </a>
                <a className="btn text-capitalize" href="#popup2">
                  watch video{" "}
                </a>
              </div>
              <div className="col-lg-6 col-md-8 mt-lg-0 mt-5 banner-image text-center">
                <img src="./assets/images/home.png" alt="" className="img-fluid" />
                <h4 className=" mt-3 text-white text-center">
                  Build Your Dream House{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <section className="about py-5" id="about">
          <div className="container py-md-5">
            <div className="row">
              <div className="col-lg-3 col-md-5 about-left">
                <h3 className="heading mb-5">About us</h3>
                <div className="grid">
                  <h4>
                    120+ <span>Properties</span>
                  </h4>
                </div>
                <div className="grid my-3">
                  <h4>
                    142 <span className="ml-4">Professionals</span>
                  </h4>
                </div>
                <div className="grid my-3">
                  <h4>
                    212 <span className="ml-4">Property Sales </span>
                  </h4>
                </div>
                <div className="grid">
                  <h4>
                    120+ <span>Happy Clients </span>
                  </h4>
                </div>
              </div>
              <div className="col-lg-5 col-md-7 about-text mt-md-0 mt-5">
                <h3>Welcome To Our Real Estate Agency Website </h3>
                <p className="mt-3">
                  Integer pulvinar leo id viverra feugiat. Pellentesque libero
                  justo, semper at tempus vel, ultrices in ligula. Nulla uter
                  sollicitudin velit. Sed porttitor orci vel ferm semper at vel,
                  ultrices in ligula.
                </p>
                <p className="mt-2">
                  Integer pulvinar leo id viverra feugiat. Pellentesque libero
                  justo, semper at tempus vel, ultrices in ligula. Nulla uter
                  sollicitudin velit. Sed porttitor orci vel fermentum elit
                  maximus. Curabitur ut turpis massa in condimentum libero.
                  Pellentesque maximus.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 about-img">
                <img src="./assets/images/about.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <section className="choose bg-light py-5">
          <div className="container py-md-3">
            <h3 className="heading mb-5"> What are you looking for?</h3>
            <div className="feature-grids row">
              <div className="col-lg-3 col-sm-6">
                <div className="f1 bg-white icon1 p-4">
                  <span className="fa fa-building"></span>
                  <h3 className="my-3">Apartments</h3>
                  <p>Excepteur sint occaecat non proident maximus.</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mt-sm-0 mt-4">
                <div className="f1 bg-white icon2 p-4">
                  <span className="fa fa-home"></span>
                  <h3 className="my-3">Houses</h3>
                  <p>Excepteur sint occaecat non proident maximus.</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                <div className="f1 bg-white icon3 p-4">
                  <span className="fa fa-dollar"></span>
                  <h3 className="my-3">Properties</h3>
                  <p>Excepteur sint occaecat non proident maximus.</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                <div className="f1 bg-white icon4 p-4">
                  <span className="fa fa-cogs"></span>
                  <h3 className="my-3">Sales</h3>
                  <p>Excepteur sint occaecat non proident maximus.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="process py-5" id="services">
          <div className="container py-md-3">
            <h3 className="heading mb-5">Offered Services</h3>
            <div className="row process-grids">
              <div className="col-lg-3 col-md-6 my-lg-4 w3pvt-ab position-relative">
                <div className="">
                  <img
                    src="./assets/images/ser1.png"
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h4 className="feed-title my-3">Rental Apartments</h4>
                <p>
                  {" "}
                  Excepteur ut occaecat ipsum proident, sunt int culpa quis.
                  Phasellus lacinia id erat risu quis sunt int dolor.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 my-lg-4 mt-md-0 mt-4 w3pvt-ab position-relative">
                <div className="">
                  <img
                    src="./assets/images/ser2.png"
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h4 className="feed-title my-3">Houses For Sale</h4>
                <p>
                  {" "}
                  Excepteur ut occaecat ipsum proident, sunt int culpa quis.
                  Phasellus lacinia id erat risu quis sunt int dolor.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 my-lg-4 mt-sm-5 mt-4 w3pvt-ab position-relative">
                <div className="">
                  <img
                    src="./assets/images/ser3.png"
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h4 className="feed-title my-3">Property Sale</h4>
                <p>
                  {" "}
                  Excepteur ut occaecat ipsum proident, sunt int culpa quis.
                  Phasellus lacinia id erat risu quis sunt int dolor.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 mt-lg-4 mt-sm-5 mt-4 w3pvt-ab">
                <div className="">
                  <img
                    src="./assets/images/ser4.png"
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h4 className="feed-title my-3">Construction</h4>
                <p>
                  {" "}
                  Excepteur ut occaecat ipsum proident, sunt int culpa quis.
                  Phasellus lacinia id erat risu quis sunt int dolor.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="video bg-light py-5" id="video">
          <div className="container">
            <div className="inner-sec-w3ls py-lg-5 py-3">
              <div className="row">
                <div className="col-lg-6 video-right px-lg-5 px-2">
                  <h3 className="tittle-w3">Perfect Business Real Estate Agency</h3>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet Neque porro quisquam est qui
                    dolorem Lorem int ipsum dolor sit amet when an unknown
                    printer took a galley of type.Vivamus id tempor felis. Cras
                    sagittis mi sit amet malesuada mollis. Mauris porroinit
                    consectetur cursus tortor vel interdum dolorem Lorem int
                    ipsum dolor sit amet.
                  </p>
                </div>
                <div className="col-lg-6 video-img mt-lg-0 mt-4">
                  <img
                    src="./assets/images/right.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section py-5" id="agents">
          <div className="container py-lg-5">
            <h3 className="heading mb-5"> Our Agents Team</h3>
            <div className="section_header">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="teamy_preview">
                    <img
                      src="./assets/images/team1.jpg"
                      className="teamy_avatar"
                      alt="The demo photo"
                    />
                  </div>
                  <div className="teamy_content mt-3">
                    <h3 className="teamy_name">Suzan Lois</h3>
                    <span className="teamy_post">Estate Agent</span>
                  </div>
                  <div className="teamy_back">
                    <div className="teamy_back-inner">
                      <a href="#0" className="social">
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a href="#0" className="social">
                        <span className="fa fa-twitter"></span>
                      </a>
                      <a href="#0" className="social">
                        <span className="fa fa-envelope-open"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mt-sm-0 mt-4">
                  <div className="teamy_preview">
                    <img
                      src="./assets/images/team2.jpg"
                      className="teamy_avatar"
                      alt="The demo photo"
                    />
                  </div>
                  <div className="teamy_content mt-3">
                    <h3 className="teamy_name">Dora Caelan</h3>
                    <span className="teamy_post">Estate Agent</span>
                  </div>
                  <div className="teamy_back">
                    <div className="teamy_back-inner">
                      <a href="#0" className="social">
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a href="#0" className="social">
                        <span className="fa fa-twitter"></span>
                      </a>
                      <a href="#0" className="social">
                        <span className="fa fa-envelope-open"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mt-md-0 mt-4">
                  <div className="teamy_preview">
                    <img
                      src="./assets/images/team3.jpg"
                      className="teamy_avatar"
                      alt="The demo photo"
                    />
                  </div>
                  <div className="teamy_content mt-3">
                    <h3 className="teamy_name">Rosanna</h3>
                    <span className="teamy_post">Estate Agent</span>
                  </div>
                  <div className="teamy_back">
                    <div className="teamy_back-inner">
                      <a href="#0" className="social">
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a href="#0" className="social">
                        <span className="fa fa-twitter"></span>
                      </a>
                      <a href="#0" className="social">
                        <span className="fa fa-envelope-open"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mt-md-0 mt-4">
                  <div className="teamy_preview">
                    <img
                      src="./assets/images/team4.jpg"
                      className="teamy_avatar"
                      alt="The demo photo"
                    />
                  </div>
                  <div className="teamy_content mt-3">
                    <h3 className="teamy_name">Rose Alpha</h3>
                    <span className="teamy_post">Estate Agent</span>
                  </div>
                  <div className="teamy_back">
                    <div className="teamy_back-inner">
                      <a href="#0" className="social">
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a href="#0" className="social">
                        <span className="fa fa-twitter"></span>
                      </a>
                      <a href="#0" className="social">
                        <span className="fa fa-envelope-open"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="partners py-5" id="partners">
          <div className="container py-md-3">
            <h3 className="heading text-white mb-5">Our Estate Partners</h3>
            <div className="inner-sec-w3ls">
              <div className="sponsers-icon text-center">
                <ul className="list-unstyled partners-icon row">
                  <li className="col-md-2 col-4">
                    <i className="fa fa-codepen" aria-hidden="true"></i>
                  </li>
                  <li className="col-md-2 col-4 border-left border-right">
                    <i className="fa fa-lastfm" aria-hidden="true"></i>
                  </li>
                  <li className="col-md-2 col-4 border-right">
                    <i className="fa fa-codiepie" aria-hidden="true"></i>
                  </li>
                  <li className="col-md-2 col-4 border-right mt-md-0 mt-3">
                    <i className="fa fa-drupal" aria-hidden="true"></i>
                  </li>
                  <li className="col-md-2 col-4 border-right mt-md-0 mt-3">
                    <i className="fa fa-dashcube" aria-hidden="true"></i>
                  </li>
                  <li className="col-md-2 col-4 mt-md-0 mt-3">
                    <i className="fa fa-skyatlas" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
     
      </section>
    </div>
  );
}

export default Home;
