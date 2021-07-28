import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  NavContainer,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Avatar,
  InfoWrap,
  DropDownItem,
  DropDownMenu,
  Logo,
  NavInfor,
  NavInfoLink,
} from "./style";
import { logOutUser } from "app/redux/reducer/userLogin";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

const NavHome = () => {
  // redux
  const dispatch = useDispatch();
  const { isAuthenticated, data } = useSelector(
    (state) => state.userLoginReducer
  );
  // state local

  const [open, setOpen] = useState(false);
  const [infoShow, setInfoShow] = useState(false);

  // router
  const history = useHistory();
  const renderLogin = () => {
    if (isAuthenticated && data) {
      return (
        <>
          <InfoWrap className='infoWrap hide-on-mobile'>
            <Avatar>A</Avatar>
            <DropDownMenu className='dropInfo-menu'>
              <DropDownItem disabled={true} to='/user/info'>
                {data?.hoTen}
              </DropDownItem>
              <NavDropdown.Divider />
              <DropDownItem to='/user/ticket-history'>
                Lịch sử đặt vé
              </DropDownItem>
              <NavDropdown.Divider />
              {data?.maLoaiNguoiDung === "QuanTri" ? (
                <>
                  <DropDownItem to='/dash-board'>Quản lý trang</DropDownItem>
                  <NavDropdown.Divider />
                </>
              ) : null}
              <DropDownItem
                onClick={() => {
                  dispatch(logOutUser());
                  history.push("/");
                }}
              >
                Đăng xuất
              </DropDownItem>
            </DropDownMenu>
          </InfoWrap>

          <div className='hide-on-pc nav-info'>
            <div
              className='toggle-show-info'
              onClick={() => setInfoShow(!infoShow)}
            >
              User Setting
            </div>
            <NavInfor open={infoShow}>
              <NavInfoLink
                smooth
                to='/user/setting'
                activeStyle={{ color: "#ff2c1f" }}
              >
                {data?.hoTen}
              </NavInfoLink>

              <NavInfoLink
                smooth
                to='/user/ticket'
                activeStyle={{ color: "#ff2c1f" }}
              >
                Lịch sử đặt vé
              </NavInfoLink>
              {data?.maLoaiNguoiDung === "QuanTri" ? (
                <NavInfoLink
                  smooth
                  to='/dash-board'
                  activeStyle={{ color: "#ff2c1f" }}
                >
                  Quản lý trang
                </NavInfoLink>
              ) : null}
              <div
                className='user-logout'
                onClick={() => {
                  dispatch(logOutUser());
                  history.push("/");
                }}
              >
                Đăng xuất
              </div>
            </NavInfor>
          </div>
        </>
      );
    }
    return (
      <>
        <NavBtn>
          <NavBtnLink to='/login'>Đăng nhập</NavBtnLink>
        </NavBtn>
        <NavBtn className='hide-on-mobile'>
          <NavBtnLink to='/register'>Đăng ký</NavBtnLink>
        </NavBtn>
      </>
    );
  };
  return (
    <NavContainer>
      <Logo smooth to='/#'>
        <h1>Logo</h1>
      </Logo>
      <Bars
        onClick={() => {
          setOpen(!open);
        }}
      />
      <NavMenu open={open}>
        <NavLink
          onClick={() => {
            setOpen(!open);
          }}
          smooth
          to='/#menu'
          activeStyle={{ color: "#ff2c1f" }}
          showInfo={infoShow}
        >
          Menu
        </NavLink>
        <NavLink
          onClick={() => {
            setOpen(!open);
          }}
          smooth
          to='/#movies'
          activeStyle={{ color: "#ff2c1f" }}
          showInfo={infoShow}
        >
          Movie
        </NavLink>
        <NavLink
          onClick={() => {
            setOpen(!open);
          }}
          smooth
          to='/#theaters'
          activeStyle={{ color: "#ff2c1f" }}
          showInfo={infoShow}
        >
          Theater
        </NavLink>
        {renderLogin()}
      </NavMenu>
    </NavContainer>
  );
};

export default NavHome;
