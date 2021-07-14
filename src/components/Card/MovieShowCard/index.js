import React from "react";
import "./styles";
import {
  CardWrap,
  CardImg,
  CardBody,
  CardTitle,
  CardShowBody,
  CardShow,
} from "./styles";

const MovieShowCard = ({ phim, date }) => {
  console.log(phim, date);
  const renderListShow = () => {
    return phim?.lstLichChieuTheoPhim.map((lichChieu, index) => {
      if (new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString() === date) {
        const hour = new Date(lichChieu.ngayChieuGioChieu).getHours();
        const minute = new Date(lichChieu.ngayChieuGioChieu).getMinutes();

        return (
          <CardShow to={`/movie/${lichChieu.maLichChieu}`}>
            {hour}:{minute}
          </CardShow>
        );
      }
    });
  };
  return (
    <CardWrap>
      <CardBody>
        <CardImg src={phim.hinhAnh}></CardImg>
        <CardTitle>{phim.tenPhim}</CardTitle>
      </CardBody>
      <CardShowBody>{renderListShow()}</CardShowBody>
    </CardWrap>
  );
};

export default MovieShowCard;
