import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./styles.css";

const NavbarHome = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='md'
      variant='dark'
      sticky='top'
      className='container-fluid d-flex justify-content-between navbar_home'
    >
      <Nav>
        <Navbar.Brand as={NavLink} to='/'>
          LOGOCINEMA
        </Navbar.Brand>
      </Nav>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='m-auto'>
          <Nav.Link href='#'>TRANG CHỦ</Nav.Link>
          <Nav.Link href='#'>LỊCH CHIẾU</Nav.Link>
          <Nav.Link href='#'>CỤM RẠP</Nav.Link>
          <Nav.Link href='#'>LIÊN HỆ</Nav.Link>
        </Nav>
        <Nav className='hide-on-pc'>
          <Nav.Link as={NavLink} to='/login'>
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className='hide-on-mobile'>
        <Nav.Link as={NavLink} to='/login'>
          Login
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarHome;
