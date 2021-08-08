import { listUserApi } from "app/redux/reducer/Admin/listUser";
import Loading from "components/Loading";
import UserDetailModal from "components/Modal/UserDetailModal";
import UserEditModal from "components/Modal/UserEditModal";
import Pagination from "components/Pagination";
import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const UserManagerment = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const [detailUser, setDetailUser] = useState(null);
  const { data, loading } = useSelector((state) => state.listUserReducer);
  const renderListUser = (userList) => {
    return userList?.map((user, index) => {
      return (
        <tr key={index}>
          <td>{(currentPage - 1) * 10 + index + 1}</td>
          <td>{user.taiKhoan}</td>
          <td>{user.email}</td>
          <td>{user.matKhau}</td>
          <td>{user.maLoaiNguoiDung}</td>
          <td>
            <Button
              className='btn btn-info m-2'
              onClick={() => {
                setDetailUser(user);
                setTypeModal("detail");
                setModalShow(true);
              }}
            >
              Chi tiết
            </Button>

            <Button
              className='btn btn-success'
              onClick={() => {
                setDetailUser(user);
                setTypeModal("edit");
                setModalShow(true);
              }}
            >
              Chỉnh sửa
            </Button>
          </td>
        </tr>
      );
    });
  };
  useEffect(() => {
    dispatch(listUserApi({ page: 1, totalItems: 10 }));
  }, []);
  useEffect(() => {
    dispatch(listUserApi({ page: currentPage, totalItems: 10 }));
  }, [currentPage]);
  if (loading) return <Loading />;

  return (
    <Container>
      <h1 className='heading'>Danh sách người dùng</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tài khoản</th>
            <th>Email</th>
            <th>Mật khẩu</th>
            <th>Loại</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderListUser(data.items)}</tbody>
      </Table>
      <Pagination
        totalPages={data.totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      {detailUser !== null && typeModal === "detail" && (
        <UserDetailModal
          detailUser={detailUser}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}
      {detailUser !== null && typeModal === "edit" && (
        <UserEditModal
          detailUser={detailUser}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}
    </Container>
  );
};

export default UserManagerment;
