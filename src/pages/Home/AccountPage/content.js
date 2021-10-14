import { editUserApi } from "app/redux/reducer/editUserInfo";
import { useState } from "react";
import { Validate } from "utils/Validate";
import { Form, Table, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { EditPasswordWrap, EditProfileWrap, TicketDetail } from "./style";

import swal from "sweetalert";
import {
  AccountText,
  AccountTextTitle,
  ButtonDetail,
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
          <td className='text-color-white'>{index + 1}</td>
          <td className='text-color-white hide-on-mobile-flex'>
            {ticket.tenPhim}
          </td>
          <td className='text-color-white'>{ticket.maVe}</td>
          <td className='hide-on-mobile-flex text-color-white '>
            {ticket.danhSachGhe[0].tenHeThongRap}
          </td>
          <td className='hide-on-mobile-flex text-color-white'>
            {ticket.danhSachGhe[0].tenCumRap}
          </td>
          <td>
            <ButtonDetail
              className='btn btn-success'
              onClick={() => {
                setModalShow(true);
                setTypeModal("historyTicket");
                setCurrentTicket(ticket);
              }}
            >
              Detail
            </ButtonDetail>
          </td>
        </tr>
      );
    });
  };
  return (
    <HistoryContent>
      <Table striped bordered hover className='text-color-white'>
        <thead>
          <tr>
            <th>STT</th>
            <th className='hide-on-mobile-flex'>Tên phim</th>
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
  return (
    <TicketDetail>
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
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-3'>
          <ButtonSubmit
            large={true}
            variant='danger'
            onClick={() => hideModal()}
          >
            Thoát
          </ButtonSubmit>
        </div>
      </div>
    </TicketDetail>
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
    setErrorMessage({ ...errorMessage, [event.target.name]: "" });
  };
  const [errorMessage, setErrorMessage] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = Validate({
      hoTen: editForm.hoTen,
      soDt: editForm.soDt,
      email: editForm.email,
    });

    if (Object.keys(errors).length === 0) {
      dispatch(editUserApi({ editForm, accessToken: dataLogin.accessToken }))
        .then((res) => {
          if (!res.error) {
            const dataUpdate = JSON.parse(localStorage.getItem("user"));
            dataUpdate.hoTen = res.payload.data.hoTen;
            dataUpdate.soDT = res.payload.data.soDT;
            dataUpdate.email = res.payload.data.email;
            localStorage.setItem("user", JSON.stringify(dataUpdate));
            swal({
              title: "Cập nhật thông tin thành công !",
              icon: "success",
            })
              .then(() => dispatch(updateUser()))
              .catch((err) => console.log(err));
          } else {
            swal({ title: res.payload, icon: "error" });
          }
          hideModal();
        })
        .catch((err) => console.log(err));
    } else {
      setErrorMessage(errors);
    }
  };

  return (
    <EditProfileWrap>
      <h1 className='form-header heading'>Chỉnh sửa thông tin</h1>
      <Form onSubmit={handleSubmit}>
        <div className='container'>
          <div className='row mt-2 mb-2'>
            <div className='col-2'></div>
            <div className='col-8'>
              <Form.Group
                className={
                  errorMessage.hoTen ? "color-danger border-danger" : ""
                }
              >
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
              {errorMessage.hoTen ? (
                <Form.Label className='color-danger'>
                  {errorMessage.hoTen}
                </Form.Label>
              ) : (
                ""
              )}
            </div>
            <div className='col-2'></div>
          </div>
          <div className='row mt-2 mb-2'>
            <div className='col-2'></div>
            <div className='col-8'>
              <Form.Group
                className={
                  errorMessage.email ? "color-danger border-danger" : ""
                }
              >
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
              {errorMessage.email ? (
                <Form.Label className='color-danger'>
                  {errorMessage.email}
                </Form.Label>
              ) : (
                ""
              )}
            </div>
            <div className='col-2'></div>
          </div>
          <div className='row mt-2 mb-2'>
            <div className='col-2'></div>
            <div className='col-8'>
              <Form.Group
                className={
                  errorMessage.soDt ? "color-danger border-danger" : ""
                }
              >
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
              {errorMessage.soDt ? (
                <Form.Label className='color-danger'>
                  {errorMessage.soDt}
                </Form.Label>
              ) : (
                ""
              )}
            </div>
            <div className='col-2'></div>
          </div>
          <hr />
          <div className='row'>
            <div className=' col-md-6 col-xl-4'></div>
            <div className=' col-md-6 col-xl-8'>
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
    </EditProfileWrap>
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
    matKhau: "",
    confirmPassword: "",
  });
  let { currentPassword, matKhau, confirmPassword } = passwordChangeForm;
  const [errorMessage, setErrorMessage] = useState({});
  const handleChange = (event) => {
    setLoginForm({
      ...passwordChangeForm,
      [event.target.name]: event.target.value,
    });
    setErrorMessage({
      ...errorMessage,
      [event.target.name]: "",
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = Validate(
      {
        currentPassword: passwordChangeForm.currentPassword,
        matKhau: passwordChangeForm.matKhau,
        confirmPassword: passwordChangeForm.confirmPassword,
      },
      dataInfo.matKhau
    );
    if (Object.keys(errors).length === 0) {
      let editForm = {
        taiKhoan: dataLogin.taiKhoan,
        matKhau: passwordChangeForm.matKhau,
        email: dataLogin.email,
        soDt: dataLogin.soDT,
        maNhom: dataLogin.maNhom,
        maLoaiNguoiDung: dataLogin.maLoaiNguoiDung,
        hoTen: dataLogin.hoTen,
      };
      console.log(editForm);
      dispatch(editUserApi({ editForm, accessToken: dataLogin.accessToken }))
        .then((res) => {
          if (!res.error) {
            swal({
              title: "Đổi mật khẩu thành công! Vui lòng đăng nhập lại",
              icon: "success",
            }).then(() => dispatch(logOutUser()));
          } else {
            swal({ title: res.error.payload, icon: "error" });
          }
        })
        .catch((err) => console.log(err));
    } else {
      setErrorMessage(errors);
    }
  };

  return (
    <EditPasswordWrap>
      <h1 className='form-header heading'>Cập nhật mật khẩu</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className={
            errorMessage.currentPassword ? "color-danger border-danger" : ""
          }
        >
          <FormTitle>Mật khẩu cũ</FormTitle>
          <Form.Control
            type='password'
            placeholder='Mật khẩu cũ'
            name='currentPassword'
            required
            onChange={handleChange}
            value={currentPassword}
          />
          {errorMessage.currentPassword ? (
            <Form.Label className='color-danger'>
              {errorMessage.currentPassword}
            </Form.Label>
          ) : (
            ""
          )}
        </Form.Group>

        <Form.Group
          className={errorMessage.matKhau ? "color-danger border-danger" : ""}
        >
          <FormTitle>Mật khẩu mới</FormTitle>
          <Form.Control
            type='password'
            placeholder='Mật khẩu mới'
            name='matKhau'
            value={matKhau}
            onChange={handleChange}
            required
          />
          {errorMessage.matKhau ? (
            <Form.Label className='color-danger'>
              {errorMessage.matKhau}
            </Form.Label>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group
          className={
            errorMessage.confirmPassword ? "color-danger border-danger" : ""
          }
        >
          <FormTitle>Nhập lại mật khẩu mới</FormTitle>
          <Form.Control
            type='password'
            placeholder='Nhập lại mật khẩu'
            name='confirmPassword'
            required
            onChange={handleChange}
            value={confirmPassword}
          />
          {errorMessage.confirmPassword ? (
            <Form.Label className='color-danger'>
              {errorMessage.confirmPassword}
            </Form.Label>
          ) : (
            ""
          )}
        </Form.Group>
      </Form>
      <ButtonSubmit
        variant='success'
        type='submit'
        onClick={handleSubmit}
        className='form-submit'
        large={true}
      >
        Đổi mật khẩu
      </ButtonSubmit>
    </EditPasswordWrap>
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
