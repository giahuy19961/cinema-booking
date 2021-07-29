import React, { useEffect, useState } from "react";
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
import { useHistory } from "react-router-dom";
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
  const [isChangeBg, setChangeBg] = useState(false);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -20;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  const setPage = () => {
    if (window.pageYOffset >= 50) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  };
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", setPage);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", setPage);
    };
  });

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
    <NavContainer open={open} isChangeBg={isChangeBg}>
      <Logo smooth to='/'>
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
          showinfo={infoShow ? 1 : 0}
        >
          Menu
        </NavLink>
        <NavLink
          onClick={() => {
            setOpen(!open);
          }}
          smooth
          to='/#movies'
          scroll={(el) => scrollWithOffset(el)}
          activeStyle={{ color: "#ff2c1f" }}
          showinfo={infoShow ? 1 : 0}
        >
          Movie
        </NavLink>
        <NavLink
          onClick={() => {
            setOpen(!open);
          }}
          smooth
          to='/#theaters'
          scroll={(el) => scrollWithOffset(el)}
          activeStyle={{ color: "#ff2c1f" }}
          showinfo={infoShow ? 1 : 0}
        >
          Theater
        </NavLink>
        {renderLogin()}
      </NavMenu>
    </NavContainer>
  );
};

export default NavHome;
