import { editUserApi } from "app/redux/reducer/editUserInfo";
import { useState } from "react";
import { Validate } from "utils/Validate";
import { Button, Form, Table, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  AccountText,
  AccountTextTitle,
  ButtonSubmit,
  ExtraButton,
  FormTitle,
  HistoryContent,
} from "./style";
import { logOutUser, updateUser } from "app/redux/reducer/userLogin";

export const TicketHistory = ({
  setModalShow,
  setTypeModal,
  setCurrentTicket,
}) => {
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
          <td className='hide-on-mobile-flex '>
            {ticket.danhSachGhe[0].tenHeThongRap}
          </td>
          <td className='hide-on-mobile-flex'>
            {ticket.danhSachGhe[0].tenCumRap}
          </td>
          <td>
            <Button
              className='btn btn-success'
              onClick={() => {
                setModalShow(true);
                setTypeModal("historyTicket");
                setCurrentTicket(ticket);
              }}
            >
              Detail
            </Button>
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
            <th className='hide-on-mobile-flex'>Tên cụm rạp</th>
            <th className='hide-on-mobile-flex'>Tên rạp</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderTicketHistory(thongTinDatVe)}</tbody>
      </Table>
    </HistoryContent>
  );
};
const TicketDetailModal = ({ hideModal, ticket }) => {
  console.log(ticket);
  return (
    <>
      <h1 className='form-header heading'>Thông tin vé {ticket.maVe}</h1>
      <div className='row text-align-left'>
        <div className='col-1'></div>
        <AccountTextTitle className='col-4 '> Tên phim :</AccountTextTitle>
        <AccountText className='col-7'> {ticket.tenPhim}</AccountText>
      </div>
      <div className='row text-align-left'>
        <div className='col-1'></div>
        <AccountTextTitle className='col-4 '> Cụm rạp :</AccountTextTitle>
        <AccountText className='col-7'>
          {ticket.danhSachGhe[0].tenHeThongRap}
        </AccountText>
      </div>
      <div className='row text-align-left'>
        <div className='col-1'></div>
        <AccountTextTitle className='col-4 '> Rạp :</AccountTextTitle>
        <AccountText className='col-7'>
          {ticket.danhSachGhe[0].tenCumRap}
        </AccountText>
      </div>
      <div className='row text-align-left'>
        <div className='col-1'></div>
        <AccountTextTitle className='col-4 '> Số lượng :</AccountTextTitle>
        <AccountText className='col-7'>{ticket.danhSachGhe.length}</AccountText>
      </div>
      <div className='row text-align-left'>
        <div className='col-1'></div>
        <AccountTextTitle className='col-4 '> Giá vé :</AccountTextTitle>
        <AccountText className='col-7'>{ticket.giaVe}</AccountText>
      </div>
      <div className='row text-align-left'>
        <div className='col-1'></div>
        <AccountTextTitle className='col-4 '> Ngày đặt :</AccountTextTitle>
        <AccountText className='col-7'>
          {new Date(ticket.ngayDat).toLocaleDateString()}
        </AccountText>
      </div>
      <div className='row text-align-left'>
        <div className='col-1'></div>
        <AccountTextTitle className='col-4 '>Thời lượng:</AccountTextTitle>
        <AccountText className='col-7'>
          {ticket.thoiLuongPhim} minutes
        </AccountText>
      </div>
      <div className='row text-align-left mb-3'>
        <div className='col-1'></div>
        <AccountTextTitle className='col-4 '>Mã số ghế :</AccountTextTitle>
        <AccountText className='col-7'>
          {ticket.danhSachGhe.map((item, index) => (
            <span key={index}>
              {item.tenGhe} {index + 1 < ticket.danhSachGhe.length ? "," : ""}
            </span>
          ))}
        </AccountText>
      </div>
    </>
  );
};

export const AccountInfo = ({ setModalShow, setTypeModal }) => {
  const {
    data: { hoTen, email, soDT, maLoaiNguoiDung },
  } = useSelector((state) => state.userLoginReducer);
  return (
    <>
      {/* <h1 className='heading'>Thông tin cá nhân</h1> */}
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
        <ButtonSubmit
          className='btn btn-success mt-3 col-3'
          onClick={() => {
            setModalShow(true);
            setTypeModal("editInfo");
          }}
          large={true}
        >
          Cập nhật tài khoản
        </ButtonSubmit>
      </div>
    </>
  );
};

const EditProfile = ({ hideModal }) => {
  const dispatch = useDispatch();
  const dataInfo = useSelector((state) => state.userInfoReducer.data);
  const dataLogin = useSelector((state) => state.userLoginReducer.data);
  const [editForm, setLoginForm] = useState({
    taiKhoan: dataLogin.taiKhoan,
    matKhau: dataInfo.matKhau,
    email: dataLogin.email,
    soDt: dataLogin.soDT,
    maNhom: dataLogin.maNhom,
    maLoaiNguoiDung: dataLogin.maLoaiNguoiDung,
    hoTen: dataLogin.hoTen,
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
      dispatch(editUserApi({ editForm, accessToken: dataLogin.accessToken }))
        .then((res) => {
          const dataUpdate = JSON.parse(localStorage.getItem("user"));
          dataUpdate.hoTen = res.payload.hoTen;
          dataUpdate.soDT = res.payload.soDT;
          dataUpdate.email = res.payload.email;
          localStorage.setItem("user", JSON.stringify(dataUpdate));
          dispatch(updateUser());
          hideModal();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <h1 className='form-header heading'>Chỉnh sửa thông tin</h1>
      <Form onSubmit={handleSubmit}>
        <div className='container'>
          <div className='row mt-2 mb-2'>
            <div className='col-2'></div>
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
            <div className='col-2'></div>
          </div>
          <div className='row mt-2 mb-2'>
            <div className='col-2'></div>
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
            <div className='col-2'></div>
          </div>
          <div className='row mt-2 mb-2'>
            <div className='col-2'></div>
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
            <div className='col-2'></div>
          </div>
          <hr />
          <div className='row'>
            <div className='col-xl-6 col-md-6'></div>
            <div className='col-xl-6 col-md-6'>
              <div className='d-flex justify-content-start'>
                <ExtraButton
                  variant='success'
                  type='submit'
                  onClick={handleSubmit}
                >
                  Cập nhật tài khoản
                </ExtraButton>
                <ExtraButton
                  large={true}
                  variant='danger'
                  onClick={() => hideModal()}
                >
                  Hủy bỏ
                </ExtraButton>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export const EditPassword = () => {
  const dispatch = useDispatch();
  const dataInfo = useSelector((state) => state.userInfoReducer.data);
  const dataLogin = useSelector((state) => state.userLoginReducer.data);
  // const [editForm, setLoginForm] = useState({
  //   taiKhoan: dataLogin.taiKhoan,
  //   matKhau: dataInfo.matKhau,
  //   email: dataLogin.email,
  //   soDt: dataLogin.soDT,
  //   maNhom: dataLogin.maNhom,
  //   maLoaiNguoiDung: dataLogin.maLoaiNguoiDung,
  //   hoTen: dataLogin.hoTen,
  // });

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

    const errors = Validate(
      {
        currentPassword: passwordChangeForm.currentPassword,
        password: passwordChangeForm.password,
        confirmPassword: passwordChangeForm.confirmPassword,
      },
      dataInfo.matKhau
    );
    if (Object.keys(errors).length === 0) {
      let editForm = {
        taiKhoan: dataLogin.taiKhoan,
        matKhau: passwordChangeForm.password,
        email: dataLogin.email,
        soDt: dataLogin.soDT,
        maNhom: dataLogin.maNhom,
        maLoaiNguoiDung: dataLogin.maLoaiNguoiDung,
        hoTen: dataLogin.hoTen,
      };
      console.log(editForm);
      dispatch(editUserApi({ editForm, accessToken: dataLogin.accessToken }))
        .then((res) => {
          dispatch(logOutUser());
          alert("Đổi mật khẩu thành công , Vui lòng đăng nhập lại");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <h1 className='form-header heading'>Cập nhật mật khẩu</h1>
      <Form onSubmit={handleSubmit}>
        <div className='container'>
          <div className='row mt-2 mb-2'>
            <div className='col-xl-6'>
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
            <div className='col-xl-6'>
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
            <div className='col-xl-6'>
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
              <ButtonSubmit
                variant='success'
                type='submit'
                onClick={handleSubmit}
                className='form-submit'
                large={true}
              >
                Đổi mật khẩu
              </ButtonSubmit>
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
        {props.content === "editInfo" && (
          <EditProfile hideModal={props.onHide} />
        )}
        {props.content === "historyTicket" && (
          <TicketDetailModal hideModal={props.onHide} ticket={props.ticket} />
        )}
      </Modal.Body>
    </Modal>
  );
};
