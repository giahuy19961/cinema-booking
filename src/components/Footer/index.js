import React, { useEffect, useState } from "react";
import {
  FooterContainer,
  FooterRow,
  FooterWrap,
  Devider,
  FooterTitle,
  FooterCol,
  FooterItem,
  FooterMenu,
  FooterLogo,
  FooterLogoList,
  FooterCoLogo,
  FooterRowUnder,
} from "./styles";
import LogoSrc from "../../assets/img/cyberlogo.png";
import { useSelector } from "react-redux";
import Loading from "components/Loading";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  const { data, loading } = useSelector((state) => state.listTheatersReducer);

  const renderCoopLogo = (list) => {
    return list?.map((theater, index) => (
      <FooterCoLogo key={index}>
        <img src={theater.logo}></img>
      </FooterCoLogo>
    ));
  };
  if (loading) return <Loading />;

  return (
    <FooterWrap>
      <FooterContainer>
        <FooterRow>
          <FooterCol>
            <FooterLogo>
              <img src={LogoSrc}></img>
            </FooterLogo>
            <FooterMenu>
              <FooterItem>
                <a href='#'>FAQ</a>
              </FooterItem>
              <FooterItem>
                <a href='#'>Thỏa thuận sử dụng</a>
              </FooterItem>
              <FooterItem>
                <a href='#'>Brand Guidelines</a>
              </FooterItem>
              <FooterItem>
                <a href='#'>Chính sách bảo mật</a>
              </FooterItem>
            </FooterMenu>
          </FooterCol>
          <FooterCol>
            <FooterTitle>Đối tác</FooterTitle>
            <FooterLogoList>{renderCoopLogo(data)}</FooterLogoList>
          </FooterCol>
          <FooterCol>
            <FooterTitle>Social</FooterTitle>
            <FooterLogoList>
              <FooterCoLogo>
                <FaFacebook />
              </FooterCoLogo>
              <FooterCoLogo>
                <AiFillTwitterCircle />
              </FooterCoLogo>
            </FooterLogoList>
          </FooterCol>
        </FooterRow>
        <Devider />
        <FooterRowUnder>
          <FooterTitle>Thanks for tix.vn template supported </FooterTitle>
          <p>Last project completed learning at cybersoft</p>
          <p>
            Contact:
            <a href='mailto:giahuybk96@gmail.com'>giahuybk96@gmail.com</a>
          </p>
        </FooterRowUnder>
      </FooterContainer>
    </FooterWrap>
  );
};

export default Footer;
