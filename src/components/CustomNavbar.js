import React, { Component } from 'react';
import {Navbar,NavDropdown, Nav, NavItem, Form, FormControl, Button} from 'react-bootstrap';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (

          <Navbar bg="light" expand="md" sticky="top" className="navbar">
            {/* make it semi transparent */}
  <Navbar.Brand href="#home">LOGO</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <Nav.Link href="#home">Services</Nav.Link>
      <Nav.Link href="#link">Team</Nav.Link>
      <Nav.Link href="#home">Contact</Nav.Link>      
    </Nav>
  </Navbar.Collapse>
</Navbar>
          //   <Navbar class="navbar navbar-expand-md navbar-light " color="light" light expand="md" sticky="top">
          //   <Navbar.Brand href="#home">Logo</Navbar.Brand>    
          //   {/* add logo */}


          //   <div class="collapse navbar-collapse" id="navbarResponsive">
          //     <ul class="navbar-nav ml-auto">
          //       <li class="nav-item active">
          //         <a class="nav-link" href="#">Home</a>
          //       </li>
          //       <li class="nav-item active">
          //         <a class="nav-link" href="#">About</a>
          //       </li>
          //       <li class="nav-item active">
          //         <a class="nav-link" href="#">Services</a>
          //       </li>
          //       <li class="nav-item active">
          //         <a class="nav-link" href="#">Team</a>
          //       </li>
          //       <li class="nav-item active">
          //         <a class="nav-link" href="#">Contact</a>
          //       </li>
          //     </ul>
          //     {/* add navbar collapse button */}
          //     {/* add proper shade of navbar */}
          //     {/* make navbar sticky */}
          //   </div>
          // </Navbar>
        )
    }
}
