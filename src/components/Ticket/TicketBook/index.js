import React from "react";
import {
  CardWrap,
  CardBody,
  CardTitle,
  CardImg,
} from "components/Card/MovieShowCard/styles";
import { TicketCinemaName } from "./style";

const TicketBook = ({ phim }) => {
  return (
    <CardWrap>
      <CardBody>
        <CardImg src={phim.hinhAnh}></CardImg>
        <div>
          <CardTitle>{phim.tenPhim}</CardTitle>
          <TicketCinemaName>{phim.tenCumRap}</TicketCinemaName>
          <TicketCinemaName>{phim.tenRap}</TicketCinemaName>
        </div>
      </CardBody>

      <div>
        <CardTitle fontSize='normal' className='text-center'>
          Ngày chiếu :{phim.ngayChieu}
        </CardTitle>
        <CardTitle fontSize='normal' className='text-center'>
          Giờ chiếu :{phim.gioChieu}
        </CardTitle>
      </div>
    </CardWrap>
  );
};

export default TicketBook;
