import { LogoWrap, Register, SignIn, Logo } from "components/NavHomeRmk/style";
import { NavHashLink } from "react-router-hash-link";
import {
  Content,
  Overlay,
  SideMenu,
  Wrapper,
  SideAccount,
  SideBar,
  SideItem,
  CloseWrap,
  CloseIcon,
  SideUserInfo,
} from "./style";
import CyberLogo from "../../assets/img/cyberlogo.png";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logOutUser } from "app/redux/reducer/userLogin";

const SidebarMobile = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuthenticated, data } = useSelector(
    (state) => state.userLoginReducer
  );
  return (
    <Wrapper isOpen={isOpen}>
      <Content>
        <CloseWrap onClick={() => setIsOpen(!isOpen)}>
          <CloseIcon />
        </CloseWrap>
        <SideBar>
          <LogoWrap to='/'>
            <Logo src={CyberLogo} />
          </LogoWrap>
          {isAuthenticated && (
            <SideUserInfo
              onClick={() => {
                history.push("/account");
              }}
            >
              <img src='https://i.pravatar.cc/80' />
              <span>{data?.hoTen}</span>
            </SideUserInfo>
          )}

          <SideMenu>
            <SideItem>
              <NavHashLink to='/#menu'>Menu</NavHashLink>
            </SideItem>
            <SideItem>
              <NavHashLink to='/#movies'>Movie</NavHashLink>
            </SideItem>
            <SideItem>
              <NavHashLink
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "auto", block: "top" })
                }
                to='/theater#theater'
              >
                Theater
              </NavHashLink>
            </SideItem>
          </SideMenu>
          <SideAccount>
            {isAuthenticated ? (
              <SignIn
                onClick={() => {
                  dispatch(logOutUser());
                  history.push("/");
                }}
              >
                Đăng xuất
              </SignIn>
            ) : (
              <>
                {" "}
                <SignIn to='/login'>Đăng nhập</SignIn>
                <Register to='/register'>Đăng ký</Register>
              </>
            )}
          </SideAccount>
        </SideBar>
      </Content>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </Wrapper>
  );
};

export default SidebarMobile;
