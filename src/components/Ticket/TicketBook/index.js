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
        <TicketCinemaName className='text-center'>
          Ngày chiếu :{phim.ngayChieu}
        </TicketCinemaName>
        <TicketCinemaName className='text-center'>
          Giờ chiếu :{phim.gioChieu}
        </TicketCinemaName>
      </div>
    </CardWrap>
  );
};

export default TicketBook;
