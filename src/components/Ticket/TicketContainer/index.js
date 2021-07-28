import React from "react";
import {
  TicketBooked,
  TicketContent,
  TicketNumber,
  TicketScreen,
  TicketSeat,
  TicketVip,
  TicketWrap,
} from "./style";
import WeekendIcon from "@material-ui/icons/Weekend";

const TicketContainer = ({ danhSachGhe, handleChooseSeat }) => {
  const renderListSeat = () => {
    return danhSachGhe?.map((seat, index) => {
      if (!seat.daDat && seat.loaiGhe === "Thuong") {
        return (
          <>
            <TicketSeat onClick={() => handleChooseSeat(seat)} key={index}>
              <WeekendIcon fontSize='large' />
              <TicketNumber>{seat.tenGhe}</TicketNumber>
            </TicketSeat>
            {(index + 1) % 16 === 0 ? <br /> : ""}
          </>
        );
      }
      if (!seat.daDat && seat.loaiGhe === "Vip") {
        return (
          <>
            <TicketVip onClick={() => handleChooseSeat(seat)} key={index}>
              <WeekendIcon fontSize='large' />
              <TicketNumber>{seat.tenGhe}</TicketNumber>
            </TicketVip>
            {(index + 1) % 16 === 0 ? <br /> : ""}
          </>
        );
      }
      return (
        <>
          <TicketBooked key={index}>
            <WeekendIcon fontSize='large' />
            <TicketNumber>{seat.tenGhe}</TicketNumber>
          </TicketBooked>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </>
      );
      // } else {
      //   return seat.daDat ? (
      //     <TicketBooked>
      //       <WeekendIcon fontSize='large' />
      //       <TicketNumber>{seat.tenGhe}</TicketNumber>
      //     </TicketBooked>
      //   ) : (
      //     <TicketSeat>
      //       <WeekendIcon fontSize='large' />
      //       <TicketNumber>{seat.tenGhe}</TicketNumber>
      //     </TicketSeat>
      //   );
      // }
    });
  };
  return (
    <TicketWrap>
      <TicketScreen>Screen</TicketScreen>
      <TicketContent className='container'>
        <div className='row'>
          <div className='col-12'>{renderListSeat()}</div>
        </div>
      </TicketContent>
    </TicketWrap>
  );
};

export default TicketContainer;
