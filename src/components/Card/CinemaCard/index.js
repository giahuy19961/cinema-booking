import React from "react";
import { CardWrap, CardImg, CardBody, CardTitle, CardLink } from "./styles";

const CinemaCard = ({ cinema }) => {
  return (
    <CardWrap>
      <CardImg></CardImg>
      <CardBody>
        <CardTitle>{cinema.tenCumRap}</CardTitle>
        <CardLink>{cinema.diaChi}</CardLink>
      </CardBody>
    </CardWrap>
  );
};

export default CinemaCard;
