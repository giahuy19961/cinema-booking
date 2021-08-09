import React from "react";
import ModalContainer from "components/Modal";
import { Button } from "react-bootstrap";

const UserDetailModal = ({ show, onHide, detailUser }) => {
  const body = (
    <>
      <h1 className='heading'>
        Thông tin chi tiết tài khoản {detailUser.taiKhoan}
      </h1>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-2'></div>
          <div className='col-sm-6'>
            <div className='text-small text-color-default row'>
              <div className='  col-6 '>Tài khoản:</div>
              <div className=' col-6'>{detailUser.taiKhoan}</div>
            </div>
            <div className='text-small text-color-default row'>
              <div className='col-6'>Mật khẩu:</div>
              <div className='col-6'>{detailUser.matKhau}</div>
            </div>
            <div className='text-small text-color-default row'>
              <div className='col-6'>Họ Tên :</div>
              <div className='col-6'>{detailUser.hoTen}</div>
            </div>
            <div className='text-small text-color-default row'>
              <div className='col-3 col-lg-6'>Email:</div>
              <div className='col-9 col-lg-6'>{detailUser.email}</div>
            </div>
            <div className='text-small text-color-default row'>
              <div className='col-6'>Số điện thoại:</div>
              <div className='col-6'> {detailUser.soDt}</div>
            </div>
            <div className='text-small text-color-default row '>
              <div className='col-6'>Loại người dùng :</div>
              <div className='col-6'> {detailUser.maLoaiNguoiDung}</div>
            </div>
          </div>
          <div className='col-sm-2'></div>
        </div>
      </div>
    </>
  );
  const footer = (
    <>
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

export default UserDetailModal;
