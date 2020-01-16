import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Form, FormControl, Button} from 'react-bootstrap';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar class="navbar navbar-expand-md navbar-dark sticky-top">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>    
            {/* add logo */}


            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#">Team</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#">Contact</a>
                </li>
              </ul>
              {/* add navbar collapse button */}
              {/* add proper shade of navbar */}
              {/* make navbar sticky */}
            </div>
          </Navbar>
        )
    }
}
