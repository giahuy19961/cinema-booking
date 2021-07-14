import React from "react";
import { CardWrap, CardImg, CardBody, CardTitle, CardLink } from "./styles";

const CinemaCard = ({ cinema, setCinema }) => {
  return (
    <CardWrap onClick={() => setCinema(cinema.maCumRap)}>
      <CardImg></CardImg>
      <CardBody>
        <CardTitle>{cinema.tenCumRap}</CardTitle>
        <CardLink>{cinema.diaChi}</CardLink>
      </CardBody>
    </CardWrap>
  );
};

export default CinemaCard;
