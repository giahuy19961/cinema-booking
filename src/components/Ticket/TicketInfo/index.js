import React from "react";
import { CardWrap, CardBody } from "components/Card/MovieShowCard/styles";
import { CardTitle } from "components/Card/MovieShowCard/styles";
import { TicketBtn } from "./style";

const TicketInfo = () => {
  return (
    <CardWrap className='p-3'>
      <CardBody className='justify-content-between'>
        <CardTitle>Ghế đang đặt :</CardTitle>
        <div>C1</div>
      </CardBody>
      <CardBody className='justify-content-between'>
        <CardTitle>Tổng tiền :</CardTitle>
        <div>C1</div>
      </CardBody>
      <TicketBtn> Mua vé</TicketBtn>
    </CardWrap>
  );
};

export default TicketInfo;
