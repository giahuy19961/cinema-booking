import { listUserPaginationApi } from "app/redux/reducer/Admin/listUserPagination";
import Loading from "components/Loading";
import UserDetailModal from "components/Modal/UserDetailModal";
import UserEditModal from "components/Modal/UserEditModal";
import Pagination from "components/Pagination";
import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlineUserAdd,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { RiFileUserLine } from "react-icons/ri";
import swal from "sweetalert";
import {
  ActionGBtn,
  AdminSearch,
  ButtonUser,
  CustomTd,
  Search,
  SearchButton,
  SearchWrap,
  TitlePc,
} from "../style";
import { Link } from "react-router-dom";
import { deleteUserApi } from "app/redux/reducer/Admin/deleteUser";

const UserManagerment = () => {
  const dispatch = useDispatch();
  // const [currentPage, setCurrentPage] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { accessToken } = useSelector((state) => state.userLoginReducer.data);
  const [filter, setFilter] = useState({
    soTrang: 1,
    soPhanTuTrenTrang: 10,
    searchValue: "",
  });
  const [searchValue, setSearchValue] = useState("");
  const [typeModal, setTypeModal] = useState("");
  const [detailUser, setDetailUser] = useState(null);
  const { data, loading } = useSelector(
    (state) => state.listUserPaginationReducer
  );
  const renderListUser = (userList) => {
    return userList?.map((user, index) => {
      return (
        <tr key={index}>
          <td>{(currentPage - 1) * 10 + index + 1}</td>
          <CustomTd>{user.taiKhoan}</CustomTd>
          <td className='hide-on-mobile-flex hide-on-tablet-flex'>
            {user.email}
          </td>
          <td className='hide-on-mobile-flex'>{user.matKhau}</td>
          <td className='hide-on-mobile-flex'>{user.maLoaiNguoiDung}</td>
          <td>
            <ActionGBtn>
              <Button
                className='btn btn-info'
                onClick={() => {
                  setDetailUser(user);
                  setTypeModal("detail");
                  setModalShow(true);
                }}
              >
                <RiFileUserLine size={20} className='icon' />
                <TitlePc>Chi tiết</TitlePc>
              </Button>

              <Button
                className='btn btn-success mx-2'
                onClick={() => {
                  setDetailUser(user);
                  setTypeModal("edit");
                  setModalShow(true);
                }}
              >
                <AiOutlineEdit size={20} className='icon' />
                <TitlePc>Chỉnh sửa</TitlePc>
              </Button>
              <Button
                className='btn btn-danger'
                onClick={() => {
                  handleDelete(user);
                }}
              >
                <AiOutlineDelete size={20} className='icon' />
                <TitlePc>Xóa</TitlePc>
              </Button>
            </ActionGBtn>
          </td>
        </tr>
      );
    });
  };

  const handlePageChange = (newPage) => {
    setFilter({
      ...filter,
      soTrang: newPage,
    });
  };
  const handleDelete = (user) => {
    dispatch(deleteUserApi({ taiKhoan: user.taiKhoan, accessToken }))
      .then((res) => {
        if (!res.error) {
          swal({
            title: "Xóa người dùng thành công !",
            icon: "success",
          })
            .then(() => refreshPage())
            .catch((err) => console.log(err));
        } else {
          swal({ title: res.payload, icon: "error" });
        }
      })
      .catch((err) => console.log(err));
  };
  const refreshPage = () => {
    setFilter({
      ...filter,
    });
  };
  const handleSearch = (e) => {
    console.log(e);
    setSearchValue(e.target.value);
  };
  const handleFind = (e) => {
    e.preventDefault();
    setFilter({
      ...filter,
      soTrang: 1,
      searchValue: searchValue,
    });
  };
  // useEffect(() => {
  //   dispatch(listUserApi({ page: 1, perPage: 10, searchValue: "" }));
  // }, []);
  useEffect(() => {
    dispatch(
      listUserPaginationApi({
        page: filter.soTrang,
        perPage: filter.soPhanTuTrenTrang,
        searchValue: filter.searchValue,
      })
    );
    setCurrentPage(filter.soTrang);
  }, [filter]);

  if (loading) return <Loading />;

  return (
    <Container>
      <div className='row'>
        <div className='col-xs-12 col-lg-6'>
          <h1 className='heading-admin'>Danh sách người dùng</h1>
        </div>
        <div className='col-xs-12 col-lg-6 mt-4'>
          <AdminSearch>
            <ButtonUser
              as={Link}
              to='/admin/user/create'
              variant='success '
              className='mx-3'
            >
              <AiOutlineUserAdd size={25} />
              <TitlePc>Thêm người dùng</TitlePc>
            </ButtonUser>
            <SearchWrap onSubmit={handleFind}>
              <Search
                placeholder='Tìm kiếm người dùng'
                onChange={handleSearch}
              />
              <SearchButton type='submit' onClick={handleFind} />
            </SearchWrap>
          </AdminSearch>
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tài khoản</th>
            <th className='hide-on-mobile-flex hide-on-tablet-flex'>Email</th>
            <th className='hide-on-mobile-flex'>Mật khẩu</th>
            <th className='hide-on-mobile-flex'>Loại</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>{renderListUser(data.items)}</tbody>
      </Table>
      <Pagination
        totalPages={data.totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
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
          onEdit={refreshPage}
        />
      )}
    </Container>
  );
};

export default UserManagerment;
