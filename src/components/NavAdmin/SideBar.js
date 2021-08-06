import React from 'react'
import { Dropdown, Nav, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom";
import {AiOutlineUserAdd,AiOutlineVideoCameraAdd} from 'react-icons/ai';
import {CgUserList} from 'react-icons/cg';
import {MdMovieFilter} from 'react-icons/md';
import {IoTicketOutline} from 'react-icons/io5'
import {BiAddToQueue} from 'react-icons/bi'
import { SideBarWrap } from './style'

const SideBarAdmin = ({iconChange}) => {
    
    return (
        <SideBarWrap slide={iconChange}>
               <Nav className='col-auto'>            
          {/* <NavDropdown  title='Quản lý người dùng'  >
              <NavDropdown.Item  ><CgUserList className="icon" size={20}  />Danh sách người dùng</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><AiOutlineUserAdd className="icon" size={20}/>Thêm người dùng</NavDropdown.Item>
             
            </NavDropdown>
            <NavDropdown  title='Quản lý phim' id='collasible-nav-dropdown'>
            <NavDropdown.Item as={Link} to="/userlist"><MdMovieFilter className="icon" size={20}/>Danh sách phim</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/userlist"><AiOutlineVideoCameraAdd className="icon" size={20}/>Thêm phim</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Quản lý vé' id='collasible-nav-dropdown'>
            <NavDropdown.Item as={Link} to="/userlist"> <IoTicketOutline className="icon" size={20}/>Danh sách vé</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/userlist"><BiAddToQueue className="icon" size={20}/>Thêm lịch chiếu</NavDropdown.Item>
            </NavDropdown> */}

          
          </Nav>
          
        </SideBarWrap>
    )
}

export default SideBarAdmin
