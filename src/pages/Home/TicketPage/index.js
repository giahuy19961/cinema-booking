import { getTicketApi } from "app/redux/reducer/ticket";
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

  // function handleChoose Seat
  const handleChooseSeat = (seat) => {
    setSeatInfo((seatInfo) => [
      ...seatInfo,
      {
        maGhe: seat.maGhe,
        giaVe: seat.giaVe,
      },
    ]);
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
        <div className='row'>
          <div className='col-9'>
            <TicketContainer
              danhSachGhe={data?.danhSachGhe}
              handleChooseSeat={handleChooseSeat}
            />
          </div>
          <div className='col-3'>
            <div className='row'>
              <div className='col-12'>
                <TicketBook phim={data?.thongTinPhim} />
              </div>
              <div className='col-12'>
                <TicketInfo />
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
