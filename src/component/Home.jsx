import React, { Component } from "react";
import Products from "./Products";

export class Home extends Component {
  render() {
    return (
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img src="asset/bg.png" className="card-img" alt="background" height={600}/>
          <div className="card-img-overlay d-flex flex-column justify-content-center">
              <div className="container">
                <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
                <p className="card-text lead fs-2">
                    Check Out All. 
                </p>
              </div>
          </div>
        </div>
        <Products/>
      </div>
    );
  }
}

export default Home;
