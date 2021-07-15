import styled from 'styled-components';
import background from 'assets/img/backapp.jpg';
import { Container } from 'react-bootstrap';

export const FooterWrap = styled.div`
  background-image: url('${background}');
  height: 300px;
  width: 100%;
  padding: 20px 0;
`;

export const FooterContainer = styled(Container)``;

export const FooterRow = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContentHeader = styled.h3`
  color:#fff;
  font-size:1.3rem;
  margin-bottom:10px;
`
export const FooterContent = styled.div``;
export const Devider = styled.div`
  width: 100%;
  height: 2px;
  background-color: grey;
`;

export const FooterMenu = styled.ul`
  list-style:none;

  
`;
export const FooterItem = styled.li` 
  margin-bottom:5px;
  color:#ccc;
`;