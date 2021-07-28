import { getTicketApi } from "app/redux/reducer/ticket";
import { CardTitle } from "components/Card/MovieShowCard/styles";
import Footer from "components/Footer";
import Loading from "components/Loading";
import TicketBook from "components/Ticket/TicketBook";
import TicketContainer from "components/Ticket/TicketContainer";
import TicketInfo from "components/Ticket/TicketInfo";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TicketPage = ({
  computedMatch: {
    params: { id },
  },
}) => {
  // reducer
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.getTicketReducer);
  const { taiKhoan } = useSelector((state) => state.userLoginReducer.data);
  // localState
  const [seatInfo, setSeatInfo] = useState([]);
  //console.log(seatInfo);
  // function handleChoose Seat
  const handleChooseSeat = (seatAdd) => {
    let index = -1;
    if (seatInfo.length > 0) {
      index = seatInfo.findIndex((seat) => {
        return seat.maGhe === seatAdd.maGhe;
      });
    }
    if (index !== -1) {
      console.log("chay vao day");
      handleCancelSeat(seatAdd);
    } else {
      setSeatInfo((seatInfo) => [
        ...seatInfo,
        {
          tenGhe: seatAdd.tenGhe,
          maGhe: seatAdd.maGhe,
          giaVe: seatAdd.giaVe,
        },
      ]);
    }
  };

  // useEffect(() => {
  //   if (seatInfo.length > 0) {
  //     console.log("cap nhat cho nay ne");
  //     console.log(seatInfo);
  //   }
  // }, [seatInfo]);
  const handleCancelSeat = (seatCancel) => {
    let seatUpdate = seatInfo;
    // for (let i = 0; i < seatUpdate.length; i++) {
    //   if (seatUpdate[i].maGhe === seatCancel.maGhe) seatUpdate.splice(i, 1);
    // }
    seatUpdate = seatUpdate.filter((seat) => {
      return seat.maGhe !== seatCancel.maGhe;
    });
    setSeatInfo(seatUpdate);
  };

  console.log(seatInfo);
  // dispatch call api
  useEffect(() => {
    dispatch(getTicketApi(id));
  }, []);
  if (loading) return <Loading />;
  return (
    <>
      <div className='container mb-5 mt-5'>
        <h1 className='heading'>Đặt vé xem phim</h1>
        <CardTitle className='text-center heading'>
          {data?.thongTinPhim.tenPhim}
        </CardTitle>
        <div className='row'>
          <div className='col-9'>
            <TicketContainer
              danhSachGhe={data?.danhSachGhe}
              handleChooseSeat={handleChooseSeat}
              seatInfo={seatInfo}
            />
          </div>
          <div className='col-3'>
            <div className='row'>
              <div className='col-12'>
                <TicketBook phim={data?.thongTinPhim} />
              </div>
              <div className='col-12'>
                <TicketInfo seatInfo={seatInfo} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TicketPage;
