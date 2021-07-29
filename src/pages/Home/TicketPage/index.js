import { buyTicketApi } from "app/redux/reducer/buyTicket";
import { getTicketApi } from "app/redux/reducer/ticket";
import { CardTitle } from "components/Card/MovieShowCard/styles";
import Footer from "components/Footer";
import Loading from "components/Loading";
import ModalTicket from "components/ModalTicket";
import TicketBook from "components/Ticket/TicketBook";
import TicketContainer from "components/Ticket/TicketContainer";
import TicketInfo from "components/Ticket/TicketInfo";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const TicketPage = ({
  computedMatch: {
    params: { id },
  },
}) => {
  // reducer
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.getTicketReducer);
  const { taiKhoan, accessToken } = useSelector(
    (state) => state.userLoginReducer.data
  );
  // router
  const history = useHistory();
  // localState
  const [seatInfo, setSeatInfo] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const handleChooseSeat = (seatAdd) => {
    let index = -1;
    if (seatInfo.length > 0) {
      index = seatInfo.findIndex((seat) => {
        return seat.maGhe === seatAdd.maGhe;
      });
    }
    if (index !== -1) {
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

  const handleCancelSeat = (seatCancel) => {
    let seatUpdate = seatInfo;
    seatUpdate = seatUpdate.filter((seat) => {
      return seat.maGhe !== seatCancel.maGhe;
    });
    setSeatInfo(seatUpdate);
  };
  const renderTotal = (seatInfo) => {
    return seatInfo?.reduce((initialValue, currentValue) => {
      return initialValue + currentValue.giaVe;
    }, 0);
  };
  const buyTicket = () => {
    if (seatInfo.length > 0) {
      seatInfo?.map((ticket) => {
        let thongTinVe = {
          maLichChieu: data.thongTinPhim.maLichChieu,
          danhSachVe: [
            {
              maGhe: ticket.maGhe,
              giaVe: ticket.giaVe,
            },
          ],
          taiKhoanNguoiDung: taiKhoan,
        };

        dispatch(buyTicketApi({ thongTinVe, accessToken }));
      });
      history.push("/");
    } else {
      alert("Please choose an ticket");
    }
  };
  console.log(seatInfo);
  // dispatch call api
  useEffect(() => {
    dispatch(getTicketApi(id));
  }, []);
  if (loading) return <Loading />;
  return (
    <>
      <div className='container padding-top-page'>
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
                <TicketInfo
                  setModalShow={setModalShow}
                  seatInfo={seatInfo}
                  renderTotal={renderTotal}
                />
              </div>
            </div>
          </div>
        </div>
        <ModalTicket
          show={modalShow}
          info={{
            thongTinPhim: data.thongTinPhim,
            taiKhoan: taiKhoan,
            seatInfo: seatInfo,
            total: renderTotal,
            buyticket: buyTicket,
          }}
          onHide={() => setModalShow(false)}
        />
      </div>
      <Footer />
    </>
  );
};

export default TicketPage;
