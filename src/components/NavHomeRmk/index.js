import { NavHashLink } from "react-router-hash-link";
import {
  Account,
  Container,
  Header,
  Item,
  Logo,
  LogoWrap,
  Menu,
  MobileIcon,
  Register,
  SignIn,
  UserInfo,
  UserMenu,
  Wrapper,
} from "./style";
import CyberLogo from "../../assets/img/cyberlogo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logOutUser } from "app/redux/reducer/userLogin";

const NavHomeRmk = ({ setIsOpen, isOpen }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuthenticated, data } = useSelector(
    (state) => state.userLoginReducer
  );
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  const [isChangeBg, setChangeBg] = useState(false);

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
  return (
    <Wrapper isChangeBg={isChangeBg}>
      <Container>
        <Header>
          <LogoWrap to='/'>
            <Logo src={CyberLogo} />
          </LogoWrap>
          <Menu>
            <Item>
              <NavHashLink
                smooth
                exact
                scroll={(el) => scrollWithOffset(el)}
                to='/#menu'
              >
                Menu
              </NavHashLink>
            </Item>
            <Item>
              <NavHashLink
                smooth
                exact
                scroll={(el) => scrollWithOffset(el)}
                to='/#movies'
              >
                Movie
              </NavHashLink>
            </Item>
            <Item>
              <NavHashLink
                smooth
                exact
                scroll={(el) => scrollWithOffset(el)}
                to='/#theaterpc'
              >
                Theater
              </NavHashLink>
            </Item>
          </Menu>
          <Account>
            {isAuthenticated ? (
              <>
                <UserInfo>
                  <img src='https://i.pravatar.cc/80' />
                  <span>{data?.hoTen}</span>
                </UserInfo>
                <UserMenu>
                  <li>
                    <Link to='/account'>Qu???n l?? t??i kho???n</Link>
                  </li>
                  {data?.maLoaiNguoiDung === "QuanTri" ? (
                    <li>
                      <Link to='/dashboard'>Qu???n l?? trang</Link>
                    </li>
                  ) : null}
                  <li
                    onClick={() => {
                      dispatch(logOutUser());
                      history.push("/");
                    }}
                  >
                    ????ng xu???t
                  </li>
                </UserMenu>
              </>
            ) : (
              <>
                <SignIn to='/login'>????ng nh???p</SignIn>
                <Register to='/register'>????ng xu???t</Register>
              </>
            )}
          </Account>
          <MobileIcon onClick={() => setIsOpen(!isOpen)} />
        </Header>
      </Container>
    </Wrapper>
  );
};

export default NavHomeRmk;
