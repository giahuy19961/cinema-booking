import React from "react";
import { CardWrap, CardImg, CardBody, CardTitle, CardLink } from "./styles";

const CinemaCard = ({ cinema, setCinema }) => {
  return (
    <CardWrap onClick={() => setCinema(cinema.maCumRap)}>
      <CardImg url={cinema.hinhAnh ? cinema.hinhAnh : ""} />
      <CardBody>
        <CardTitle>{cinema.tenCumRap}</CardTitle>
        <CardLink>{cinema.diaChi ? cinema.diaChi : ""}</CardLink>
      </CardBody>
    </CardWrap>
  );
};

export default CinemaCard;
