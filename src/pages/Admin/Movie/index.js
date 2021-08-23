import { listMoviePaginationApi } from "app/redux/reducer/Admin/listMoviePagination";
import Loading from "components/Loading";
import Pagination from "components/Pagination";
import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlineUserAdd,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { BsPlay } from "react-icons/bs";

import { RiFileUserLine } from "react-icons/ri";
import swal from "sweetalert";
import {
  ActionGBtn,
  AdminSearch,
  ButtonAdd,
  ButtonUser,
  CustomTd,
  ImageSmall,
  Search,
  SearchButton,
  SearchWrap,
  TitlePc,
} from "../style";
import { Link } from "react-router-dom";
import Trailer from "components/Trailer";
import { playTrailer } from "app/redux/reducer/trailer";
import MovieDetailModal from "components/Modal/MovieDetailModal";
import { deleteMovieApi } from "app/redux/reducer/Admin/deleteMovie";
import MovieEditModal from "components/Modal/MovieEditModal";

const MovieManagerment = () => {
  const dispatch = useDispatch();
  // const [currentPage, setCurrentPage] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { isPlay, trailer } = useSelector((state) => state.trailerReducer);
  const [show, setShow] = useState(false);
  const handleModal = () => {
    if (isPlay) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    handleModal();
  }, [isPlay]);
  const { accessToken } = useSelector((state) => state.userLoginReducer.data);
  const [filter, setFilter] = useState({
    soTrang: 1,
    soPhanTuTrenTrang: 10,
    searchValue: "",
  });
  const [searchValue, setSearchValue] = useState("");
  const [typeModal, setTypeModal] = useState("");
  const [detailFilm, setDetailFilm] = useState(null);
  const { data, loading } = useSelector(
    (state) => state.listMoviePaginationReducer
  );
  const renderListFilm = (list) => {
    return list?.map((phim, index) => {
      return (
        <tr key={index} style={{ alignItems: "center" }}>
          <CustomTd>{phim.maPhim}</CustomTd>
          <CustomTd>{phim.tenPhim}</CustomTd>
          <CustomTd className='hide-on-mobile-flex hide-on-tablet-flex align-items-center'>
            <ImageSmall className='img ' src={phim.hinhAnh} />
          </CustomTd>
          <CustomTd className='hide-on-mobile-flex'>
            <ButtonUser
              onClick={() => {
                dispatch(playTrailer(phim));
              }}
            >
              <BsPlay className='icon ' size={20} />
              <TitlePc>Trailer</TitlePc>
            </ButtonUser>
          </CustomTd>
          <CustomTd className='hide-on-mobile-flex'>
            {new Date(phim.ngayKhoiChieu).toDateString()}
          </CustomTd>
          <td>
            <ActionGBtn>
              <Button
                className='btn btn-info'
                onClick={() => {
                  setDetailFilm(phim);
                  setTypeModal("detail");
                  setModalShow(true);
                }}
              >
                <RiFileUserLine size={20} className='icon' />
                <TitlePc>Chi tiết</TitlePc>
              </Button>

              <Button
                className='btn btn-success mx-1'
                onClick={() => {
                  setDetailFilm(phim);
                  setTypeModal("edit");
                  setModalShow(true);
                }}
              >
                <AiOutlineEdit size={20} className='icon' />
                <TitlePc>Chỉnh sửa</TitlePc>
              </Button>
              <Button
                className='btn btn-danger '
                onClick={() => {
                  handleDelete(phim.maPhim);
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
  const handleDelete = (maPhim) => {
    dispatch(deleteMovieApi({ maPhim, accessToken }))
      .then((res) => {
        // Cors Policy So that always pass Delete case
        swal({
          title: "Xóa phim thành công !",
          icon: "success",
        })
          .then(() => refreshPage())
          .catch((err) => console.log(err));
        // if (!res.error) {
        //
        // } else {
        //   swal({ title: res.payload, icon: "error" });
        // }
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

  useEffect(() => {
    dispatch(
      listMoviePaginationApi({
        page: filter.soTrang,
        perPage: filter.soPhanTuTrenTrang,
        tenPhim: filter.searchValue,
      })
    );
    setCurrentPage(filter.soTrang);
  }, [filter]);

  if (loading) return <Loading />;

  return (
    <Container>
      <div className='row'>
        <div className='col-xs-12 col-lg-6'>
          <h1 className='heading-admin'>Danh sách phim</h1>
        </div>
        <div className='col-xs-12 col-lg-6 mt-4'>
          <AdminSearch>
            <ButtonUser
              as={Link}
              to='/admin/movie/create'
              variant='success '
              className='mx-3'
            >
              <AiOutlineUserAdd size={25} />
              <TitlePc>Thêm phim</TitlePc>
            </ButtonUser>
            <SearchWrap onSubmit={handleFind}>
              <Search placeholder='Tìm kiếm phim' onChange={handleSearch} />
              <SearchButton type='submit' onClick={handleFind} />
            </SearchWrap>
          </AdminSearch>
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mã phim</th>
            <th>Tên phim</th>
            <th className='hide-on-mobile-flex hide-on-tablet-flex'>
              Hình ảnh
            </th>
            <th className='hide-on-mobile-flex'>Trailer</th>
            <th className='hide-on-mobile-flex'>Ngày khởi chiếu</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>{renderListFilm(data.items)}</tbody>
      </Table>
      <Trailer isPlay={show} trailer={trailer} />
      <Pagination
        totalPages={data.totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      {detailFilm !== null && typeModal === "detail" && (
        <MovieDetailModal
          detailFilm={detailFilm}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}
      {detailFilm !== null && typeModal === "edit" && (
        <MovieEditModal
          phim={detailFilm}
          show={modalShow}
          onHide={() => setModalShow(false)}
          onEdit={refreshPage}
        />
      )}
    </Container>
  );
};

export default MovieManagerment;
