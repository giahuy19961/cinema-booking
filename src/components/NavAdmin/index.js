import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { Container, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

import { FaRegAddressCard } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";

const NavAdmin = () => {
  const dataLogin = useSelector((state) => state.userLoginReducer.data);

  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      className='nav__admin'
    >
      <Container>
        <Navbar.Brand href='#home'> Cinema Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav>
            <NavDropdown
              title={`Hello! ${dataLogin.hoTen}`}
              id='collasible-nav-dropdown'
            >
              <NavDropdown.Item href='#action/3.2'>
                <FaRegAddressCard className='icon' size={20} /> Quản lý tài
                khoản
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.3'>
                <AiOutlineLogout className='icon' size={20} />
                Đăng xuất
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavAdmin;
