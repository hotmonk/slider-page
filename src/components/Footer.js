import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="main-footer bg-dark text-light">
          <div className="container">
              <div className="row text-muted">
                  <div className="col-md-4 col-sm-6">
                      <br></br>
                      <h4>LOGO 3R</h4>
                      <hr class="bg-light"></hr>
                      <ul className="list-unstyled">
                          <li>1800-123-4567</li>
                          <li>abcd@gmail.com</li>
                          <li>abchd, sector 12, Dwarka</li>
                          <li>New Delhi, 412101</li>
                      </ul>
                  </div>
                  <div className="col-md-4 col-sm-6">
                      <hr class="bg-light"></hr>
                      <h5>Our Hours</h5>
                      <hr class="bg-light"></hr>
                      <ul className="list-unstyled">
                          <li>Monday: 8am-5pm</li>
                          <li>Tuesday-Friday: 8am-5pm</li>
                          <li>Weekends:Closed</li>
                      </ul>
                  </div>
                  <div className="col-md-4 col-sm-6">
                      <h4>Lorem Ipsum</h4>
                      <ul className="list-unstyled">
                          <li>abcdTech</li>
                          <li>abcdTech</li>
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                      </ul>
                  </div> 
              </div>
              <div className="footer-bottom">
              <hr class="bg-light"></hr>
                  <p className="text xs-center">
                      &copy;{new Date().getFullYear()} 3R. All rights reserved
                  </p>
              </div>
          </div>
        
      </div>
    );
  }
}

export default Footer;