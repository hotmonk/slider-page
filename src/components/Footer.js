import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="main-footer footer">
          <div className="container">
          <img className="logo" src="assets/logo.png"/>
              {/* <div className="row ">
                  <div className="col-md-4 col-sm-6">
                      <br></br>
                      <h4>LOGO 3R</h4>
                      <hr className="light"></hr>
                      <ul className="list-unstyled">
                          <li>1800-123-4567</li>
                          <li>abcd@gmail.com</li>
                          <li>abchd, sector 12, Dwarka</li>
                          <li>New Delhi, 412101</li>
                      </ul>
                  </div>
                  <div className="col-md-4 col-sm-6">
                  <img className="logo" src="assets/logo.png"/>
                      <hr className="light"></hr>
                      <h5>Our Hours</h5>
                      <hr className="light"></hr>
                      <ul className="list-unstyled">
                          <li>Monday: 8am-5pm</li>
                          <li>Tuesday-Friday: 8am-5pm</li>
                          <li>Weekends:Closed</li>
                      </ul>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <hr className="light"></hr>
                      <h4>Lorem Ipsum</h4>
                      <hr className="light"></hr>
                      <ul className="list-unstyled">
                          <li>abcdTech</li>
                          <li>abcdTech</li>
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                      </ul>
                  </div> 
              </div> */}
              
              </div>
          
          <div className="footer-bottom">
          <hr class="light-100" className="HoriLine"></hr>
              <p className="text xs-center">
                  &copy;{new Date().getFullYear()}  All rights reserved
            </p>
            </div>
        
      </div>
    );
  }
}

export default Footer;