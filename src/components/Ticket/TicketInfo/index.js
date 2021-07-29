import React, { useState } from "react";
import { CardWrap, CardBody } from "components/Card/MovieShowCard/styles";
import { CardTitle } from "components/Card/MovieShowCard/styles";
import { TicketBtn, TicketCardBody } from "./style";
import { TicketBooked, TicketSeat, TicketVip } from "../TicketContainer/style";
import WeekendIcon from "@material-ui/icons/Weekend";

const TicketInfo = ({ seatInfo, setModalShow, renderTotal }) => {
  return (
    <CardWrap className='p-3'>
      <div className='d-flex flex-column'>
        <div className='row'>
          <TicketBooked className='col-4'>
            <WeekendIcon fontSize='large' />
          </TicketBooked>
          <div className='col-8 p-3'>Vé đã bán</div>
        </div>
        <div className='row'>
          <TicketSeat className='col-4'>
            <WeekendIcon fontSize='large' />
          </TicketSeat>
          <div className='col-8 p-3'>Vé có thể đặt</div>
        </div>
        <div className='row'>
          <TicketVip className='col-4'>
            <WeekendIcon fontSize='large' />
          </TicketVip>
          <div className='col-8 p-3'>Vé Vip</div>
        </div>
      </div>
      <TicketCardBody className='row'>
        <CardTitle className='col-12' fontSize='normal'>
          Ghế đang đặt :
        </CardTitle>
        <div className='d-flex col-12 flex-wrap'>
          {seatInfo?.map((seat, index) => (
            <span key={index} className='p-1'>
              {seat.tenGhe}
            </span>
          ))}
        </div>
      </TicketCardBody>
      <CardBody className='justify-content-between'>
        <CardTitle fontSize='normal'>Tổng tiền :</CardTitle>
        <div className='text-color-primary'>{renderTotal(seatInfo)} VND</div>
      </CardBody>
      <TicketBtn
        onClick={() => {
          if (seatInfo.length > 0) {
            setModalShow(true);
          } else {
            alert("Vui lòng chọn vé");
          }
        }}
      >
        Đặt vé
      </TicketBtn>
    </CardWrap>
  );
};

export default TicketInfo;
