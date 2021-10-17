import styled from "styled-components";
import background from "assets/img/backapp.jpg";

import BackApp from "../../assets/img/backapp.jpg";
import { LogoWrap } from "components/NavHomeRmk/style";

export const FooterWrap = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  background-image: url(${BackApp});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const FooterContainer = styled.div`
  max-width: 1575px;
  margin: 0 auto;
  padding: 40px 50px;

  color: #fff;
  @media (max-width: 1600px) {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const FooterRow = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;

    gap: 10px;
  }
  & > a {
    text-color: var(--primary-color);
  }
`;
export const FooterLogo = styled(LogoWrap)`
  flex-direction: row;
  justify-content: flex-start;
  & > img {
    object-fit: cover;
    height: 60px;
    width: auto;
  }
`;
export const FooterContent = styled.div``;
export const FooterMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 10px 10px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const FooterLogoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  gap: 10px 10px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;
export const FooterCoLogo = styled.li`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  & > svg {
    width: 100%;
    height: 100%;
    color: #e8e9ec;
  }
`;

export const FooterItem = styled.li`
  padding: 15px 0;
  & > a {
    color: #fff;
    cursor: pointer;
    font-size: 0.9rem;
  }
`;
export const FooterTitle = styled.h3`
  color: #fff;
  font-size: 1.3rem;
  margin: 10px 0px;
`;

export const Devider = styled.div`
  width: 100%;
  height: 2px;
  background-color: grey;
`;

export const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  flex: 1;
`;
export const FooterRowUnder = styled(FooterRow)`
  display: flex;
  flex-direction: column;
  & > p > a {
    padding-left: 20px;
    color: var(--primary-color);
    text-decoration: underline;
  }
`;
