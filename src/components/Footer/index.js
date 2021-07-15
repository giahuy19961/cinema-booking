import React from 'react';
import {
  FooterContainer,
  FooterRow,
  FooterContent,
  FooterWrap,
  Devider,
  ContentHeader,
  FooterMenu,
  FooterItem,
} from './styles';

const Footer = () => {
  return (
    <FooterWrap>
      <FooterContainer>
        <FooterRow className="row">
          <FooterContent className="col-4">
            <ContentHeader>CyberCinema</ContentHeader>
            <FooterMenu>
              <FooterItem>FAQ</FooterItem>
              <FooterItem>brand-guideline</FooterItem>
              <FooterItem>Thỏa thuận sử dụng</FooterItem>
              <FooterItem>Chính sách bảo mật</FooterItem>
            </FooterMenu>
          </FooterContent>
          <FooterContent className="col-4">
            <ContentHeader>Đối tác</ContentHeader>
          </FooterContent>
          <FooterContent className="col-4">
            <ContentHeader>App & Social</ContentHeader>
          </FooterContent>
        </FooterRow>
        <Devider />
        <FooterRow className="row">
          <FooterContent className="col-12">
            <ContentHeader> CYBER_CINEMA – SẢN PHẨM CỦA GH</ContentHeader>
            <p>
              email:
              <a href="mailto:giahuybk96@gmail.com">giahuybk96@gmail.com</a> for
              more info
            </p>
          </FooterContent>
        </FooterRow>
      </FooterContainer>
    </FooterWrap>
  );
};

export default Footer;
