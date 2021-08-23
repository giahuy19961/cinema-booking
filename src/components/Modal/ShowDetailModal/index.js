import React from "react";
import ModalContainer from "components/Modal";
import { Button } from "react-bootstrap";
import { MovieDetailImg, MovieDetailRow } from "../MovieDetailModal/style";

const ShowDetailModal = ({ show, onHide, detailShow, hinhAnh }) => {
  const body = (
    <>
      <h1 className='heading'>Thông tin phim {detailShow.tenPhim}</h1>
      <div className='container'>
        <MovieDetailRow className='row'>
          <div className='col-sm-4'>
            <MovieDetailImg src={hinhAnh} />
          </div>
          <div className='col-sm-8'>
            <div className='text-small text-color-default row'>
              <div className='  col-4 '>Mã lịch chiếu:</div>
              <div className=' col-8'>{detailShow.maLichChieu}</div>
            </div>
            <div className='text-small text-color-default row'>
              <div className='  col-3 '>Tên phim:</div>
              <div className=' col-9'>{detailShow.tenPhim}</div>
            </div>
            <div className='text-small text-color-default row'>
              <div className='col-3'>Thời lượng:</div>
              <div className='col-9 '>{detailShow.thoiLuong}</div>
            </div>
            <div className='text-small text-color-default row'>
              <div className='col-3'>Giá vé:</div>
              <div className='col-9 '>{detailShow.giaVe}</div>
            </div>
            <div className='text-small text-color-default row'>
              <div className='  col-3 '>Cụm rạp:</div>
              <div className=' col-9'>{detailShow.thongTinRap.tenCumRap}</div>
            </div>
            <div className='text-small text-color-default row'>
              <div className='col-3'>Rạp:</div>
              <div className='col-9 '>{detailShow.thongTinRap.tenRap}</div>
            </div>
            <div className='text-small text-color-default row'>
              <div className='col-lg-4 col-xs-5'>Ngày giờ chiếu:</div>
              <div className='col-lg-8 col-xs-7'>
                {new Date(detailShow.ngayChieuGioChieu).toUTCString()}
              </div>
            </div>
          </div>
        </MovieDetailRow>
        {/* <div className='text-small text-color-default row'>
          <div className='col-12'>Mô tả:</div>
          <MovieDescription className='col-12 '>{ticket.moTa}</MovieDescription>
        </div> */}
      </div>
    </>
  );
  const footer = (
    <>
      {/* // <Button
        //   className='btn btn-success'
        //   as={Link}
        //   to={`/admin/movie/show/${detailFilm.maPhim}`}
        // >
        //   <IoTicketOutline className='icon' size={25} />
        //   Xem lịch chiếu
        // </Button> */}
      <Button className='btn btn-danger' onClick={() => onHide()}>
        Đóng
      </Button>
    </>
  );
  return (
    <ModalContainer
      show={show}
      onHide={() => onHide()}
      body={body}
      footer={footer}
    />
  );
};

export default ShowDetailModal;
