import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <div className="carousel-content">
      <div className="carousel">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="1"
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="2"
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="3"
            ></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="./img/vi-anh-deo-tin-15906776637571.png"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="./img/tunnel-15906774078880.png"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="./img/nang-3-15894691284433.png"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="./img/boogey-15906772704394.png"
                alt="Fourth slide"
              />
            </div>
          </div>
          {/* <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a> */}
        </div>
      </div>
    </div>
    );
  }
}
