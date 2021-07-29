import React from "react";
import { Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
const ModalTicket = (props) => {
  const {
    info: { thongTinPhim, seatInfo, taiKhoan, total, buyticket },
  } = props;
  const renderInfoMovie = (seatInfo) => {
    return seatInfo?.map((ticket, index) => {
      return (
        <tr className='row' key={index}>
          <td className='col-2'>{index + 1}</td>
          <td className='col-4'>{ticket.tenGhe}</td>
          <td className='col-6'>{ticket.giaVe}</td>
        </tr>
      );
    });
  };
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      style={{ boxShadow: "2px 2px 2px 1px grey", padding: "10px" }}
    >
      <Modal.Body>
        <h1 className='heading'>Thông tin đặt vé</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className='text-small'>{thongTinPhim.tenPhim}</div>
              <div className='text-small'> {thongTinPhim.tenCumRap}</div>
              <div className='text-small'> Khách hàng :{taiKhoan}</div>
            </div>
            <div className='col-6'>
              <div className='text-small'> {thongTinPhim.tenRap}</div>
              <span className='text-small '>
                Ngày chiếu : {thongTinPhim.ngayChieu} Giờ chiếu :{" "}
                {thongTinPhim.gioChieu}
              </span>
            </div>
          </div>
        </div>

        <Table
          striped
          bordered
          hover
          size='sm'
          className='container text-center  '
        >
          <thead>
            <tr className='row'>
              <th className='col-2'>STT</th>
              <th className='col-4'>Tên ghế</th>
              <th className='col-6'>Giá tiền(VND)</th>
            </tr>
          </thead>
          <tbody>
            {renderInfoMovie(seatInfo)}
            <tr className='row'>
              <td className='col-2'>Tổng</td>
              <td className='col-4'></td>
              <td className='col-6'>{total(seatInfo)}</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button className='btn btn-success' onClick={() => buyticket()}>
          Thanh toán
        </Button>
        <Button className='btn btn-danger' onClick={props.onHide}>
          Trở lại đặt vé
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTicket;
