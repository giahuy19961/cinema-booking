import React from "react";
import ModalContainer from "components/Modal";
import { Button } from "react-bootstrap";
import { IoTicketOutline } from "react-icons/io5";
import { MovieDescription, MovieDetailImg, MovieDetailRow } from "./style";
import { Link } from "react-router-dom";

const MovieDetailModal = ({ show, onHide, detailFilm }) => {
  const body = (
    <>
      <h1 className='heading'>Thông tin phim {detailFilm.tenPhim}</h1>
      <div className='container'>
        <MovieDetailRow className='row'>
          <div className='col-sm-4'>
            <MovieDetailImg src={detailFilm.hinhAnh} />
          </div>
          <div className='col-sm-8'>
            <div className='text-small text-color-default row'>
              <div className='  col-3 '>Mã phim:</div>
              <div className=' col-9'>{detailFilm.maPhim}</div>
            </div>
            <div className='text-small text-color-default row'>
              <div className='  col-3 '>Tên phim:</div>
              <div className=' col-9'>{detailFilm.tenPhim}</div>
            </div>
            <div className='text-small text-color-default row'>
              <div className='  col-3 '>Bí danh:</div>
              <div className=' col-9'>{detailFilm.biDanh}</div>
            </div>
            <div className='text-small text-color-default row'>
              <div className='col-2'>Trailer:</div>
              <div className='col-10 '>{detailFilm.trailer}</div>
            </div>
            <div className='text-small text-color-default row'>
              <div className='col-12'>Khởi chiếu:</div>
              <div className='col-12'>
                {new Date(detailFilm.ngayKhoiChieu).toUTCString()}
              </div>
            </div>
          </div>
        </MovieDetailRow>
        <div className='text-small text-color-default row'>
          <div className='col-12'>Mô tả:</div>
          <MovieDescription className='col-12 '>
            {detailFilm.moTa}
          </MovieDescription>
        </div>
      </div>
    </>
  );
  const footer = (
    <>
      <Button
        className='btn btn-success'
        as={Link}
        to={`/admin/movie/show/${detailFilm.maPhim}`}
      >
        <IoTicketOutline className='icon' size={25} />
        Xem lịch chiếu
      </Button>
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

export default MovieDetailModal;
