import { editUserApi } from "app/redux/reducer/editUserInfo";
import { useState } from "react";
import { Validate } from "utils/Validate";
import { Button, Form, Table, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  AccountText,
  AccountTextTitle,
  FormTitle,
  HistoryContent,
} from "./style";

export const TicketHistory = () => {
  const { thongTinDatVe } = useSelector((state) => state.userInfoReducer.data);

  const renderTicketHistory = (ticketinfo) => {
    //   {new Date(ticket.ngayDat).toLocaleDateString}
    if (ticketinfo.length === 0) return <tr>Bạn chưa đặt vé nào</tr>;
    return ticketinfo?.map((ticket, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{ticket.tenPhim}</td>
          <td>{ticket.maVe}</td>
          <td>{ticket.danhSachGhe[0].tenHeThongRap}</td>
          <td>{ticket.danhSachGhe[0].tenCumRap}</td>
          <td></td>
          <td>
            <Button className='btn btn-success'>Detail</Button>
          </td>
        </tr>
      );
    });
  };
  return (
    <HistoryContent>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên phim</th>
            <th>Mã đặt vé</th>
            <th>Tên cụm rạp</th>
            <th>Tên rạp</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderTicketHistory(thongTinDatVe)}</tbody>
      </Table>
    </HistoryContent>
  );
};

export const AccountInfo = ({ setModalShow }) => {
  const {
    data: { hoTen, email, soDT, maLoaiNguoiDung },
  } = useSelector((state) => state.userLoginReducer);
  return (
    <>
      <h1 className='heading'>Thông tin cá nhân</h1>
      <div className='row text-align-left'>
        <AccountTextTitle className='col-4 '> Họ Tên :</AccountTextTitle>
        <AccountText className='col-8'> {hoTen}</AccountText>
      </div>
      <div className='row text-align-left'>
        <AccountTextTitle className='col-4 '> Email :</AccountTextTitle>
        <AccountText className='col-8 '> {email}</AccountText>
      </div>
      <div className='row text-align-left'>
        <AccountTextTitle className='col-4 '> Số điện thoại :</AccountTextTitle>
        <AccountText className='col-8'> {soDT}</AccountText>
      </div>
      <div className='row text-align-left'>
        <AccountTextTitle className='col-4 '> Role :</AccountTextTitle>
        <AccountText className='col-8'> {maLoaiNguoiDung}</AccountText>
      </div>
      <div className='row '>
        <Button
          className='btn btn-success mt-3 col-3'
          onClick={() => setModalShow(true)}
        >
          Cập nhật tài khoản
        </Button>
      </div>
    </>
  );
};

const EditProfile = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.userInfoReducer);
  const {
    data: { maLoaiNguoiDung, accessToken },
  } = useSelector((state) => state.userLoginReducer);

  const [editForm, setLoginForm] = useState({
    taiKhoan: data.taiKhoan,
    matKhau: data.matKhau,
    email: data.email,
    soDt: data.soDT,
    maNhom: data.maNhom,
    maLoaiNguoiDung: maLoaiNguoiDung,
    hoTen: data.hoTen,
  });

  let { email, soDt, hoTen } = editForm;
  const handleChange = (event) => {
    setLoginForm({ ...editForm, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = Validate({
      hoTen: editForm.hoTen,
      soDT: editForm.soDt,
      email: editForm.email,
    });
    if (Object.keys(errors).length === 0) {
      dispatch(editUserApi({ editForm, accessToken: accessToken }));
    }
  };

  return (
    <>
      <h1 className='form-header heading'>Chỉnh sửa thông tin</h1>
      <Form onSubmit={handleSubmit}>
        <div className='container'>
          <div className='row mt-2 mb-2'>
            <div className='col-8'>
              <Form.Group>
                <AccountTextTitle>Họ tên</AccountTextTitle>
                <Form.Control
                  type='text'
                  placeholder='Họ Tên'
                  name='hoTen'
                  required
                  onChange={handleChange}
                  value={hoTen}
                />
              </Form.Group>
            </div>
          </div>
          <div className='row mt-2 mb-2'>
            <div className='col-8'>
              <Form.Group>
                <AccountTextTitle>Email</AccountTextTitle>
                <Form.Control
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </div>
          </div>
          <div className='row mt-2 mb-2'>
            <div className='col-8'>
              <Form.Group>
                <AccountTextTitle>Số điện thoại</AccountTextTitle>
                <Form.Control
                  type='text'
                  placeholder='Số điện thoại'
                  name='soDt'
                  required
                  onChange={handleChange}
                  value={soDt}
                />
              </Form.Group>
            </div>
          </div>
          <div className='row'>
            <div className='col-4'>
              <Button
                variant='success'
                type='submit'
                onClick={handleSubmit}
                className='form-submit'
              >
                Cập nhật tài khoản
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export const EditPassword = () => {
  const dispatch = useDispatch();
  const [passwordChangeForm, setLoginForm] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });
  let { currentPassword, password, confirmPassword } = passwordChangeForm;
  const handleChange = (event) => {
    setLoginForm({
      ...passwordChangeForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1 className='form-header heading'>Cập nhật mật khẩu</h1>
      <Form onSubmit={handleSubmit}>
        <div className='container'>
          <div className='row mt-2 mb-2'>
            <div className='col-6'>
              <Form.Group>
                <FormTitle>Mật khẩu cũ</FormTitle>
                <Form.Control
                  type='text'
                  placeholder='Mật khẩu cũ'
                  name='currentPassword'
                  required
                  onChange={handleChange}
                  value={currentPassword}
                />
              </Form.Group>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <Form.Group>
                <FormTitle>Mật khẩu mới</FormTitle>
                <Form.Control
                  type='password'
                  placeholder='Mật khẩu mới'
                  name='password'
                  value={password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <Form.Group>
                <FormTitle>Nhập lại mật khẩu mới</FormTitle>
                <Form.Control
                  type='text'
                  placeholder='Nhập lại mật khẩu'
                  name='confirmPassword'
                  required
                  onChange={handleChange}
                  value={confirmPassword}
                />
              </Form.Group>
            </div>
          </div>
          <div className='row'>
            <div className='col-3'>
              <Button
                variant='success'
                type='submit'
                onClick={handleSubmit}
                className='form-submit'
              >
                Đổi mật khẩu
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export const ModalEditInfo = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body>
        <EditProfile />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
