import { infoShowMovieApi } from "app/redux/reducer/Admin/infoShowMovie";
import Loading from "components/Loading";
import ShowDetailModal from "components/Modal/ShowDetailModal";
import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";
import { RiFileUserLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  ActionGBtn,
  AdminSearch,
  ButtonUser,
  CustomTd,
  ImageSmall,
  Search,
  SearchButton,
  SearchWrap,
  TitlePc,
} from "../style";

const MovieShow = ({
  computedMatch: {
    params: { id },
  },
}) => {
  // global  state
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.infoShowMovieReducer);

  // local state
  const [detailShow, setDetailShow] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  // func handle
  const renderListShow = (list) => {
    return list?.map((lichChieu, index) => {
      return (
        <tr key={index} style={{ alignItems: "center" }}>
          <CustomTd>{index}</CustomTd>
          <CustomTd>{lichChieu.maLichChieu}</CustomTd>
          <CustomTd className='hide-on-mobile-flex hide-on-tablet-flex align-items-center'>
            {lichChieu.thongTinRap.tenRap}
          </CustomTd>
          <CustomTd className='hide-on-mobile-flex'>
            {lichChieu.thongTinRap.tenCumRap}
          </CustomTd>
          <CustomTd className='hide-on-mobile-flex'>
            {new Date(lichChieu.ngayChieuGioChieu).toDateString()}
          </CustomTd>
          <CustomTd className='hide-on-mobile-flex'>{lichChieu.giaVe}</CustomTd>
          <td>
            <ActionGBtn>
              <Button
                className='btn btn-info'
                onClick={() => {
                  setDetailShow(lichChieu);
                  setTypeModal("detail");
                  setModalShow(true);
                }}
              >
                <RiFileUserLine size={20} className='icon' />
                <TitlePc>Chi ti???t</TitlePc>
              </Button>
            </ActionGBtn>
          </td>
        </tr>
      );
    });
  };
  useEffect(() => {
    dispatch(infoShowMovieApi(id));
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <h1 className='heading'>Danh s??ch l???ch chi???u {data.tenPhim}</h1>
      <h2 className='text-large text-center'>M?? phim {data.maPhim}</h2>
      <div className='row'>
        <div className='col-xs-12 col-lg-12 mt-4'>
          <AdminSearch>
            <ButtonUser
              as={Link}
              to={`/admin/ticket/create/${data.maPhim}`}
              variant='success '
              className='mx-3'
            >
              <AiOutlineEdit size={25} />
              <TitlePc>T???o l???ch chi???u</TitlePc>
            </ButtonUser>
            <SearchWrap>
              <Search placeholder='T??m ki???m phim' />
              <SearchButton type='submit' />
            </SearchWrap>
          </AdminSearch>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>T??n l???ch chi???u</th>
            <th className='hide-on-mobile-flex hide-on-tablet-flex'>R???p</th>
            <th className='hide-on-mobile-flex '>C???m r???p</th>
            <th className='hide-on-mobile-flex'>Ng??y gi??? chi???u</th>
            <th className='hide-on-mobile-flex'>Gi?? v??</th>

            <th>Thao t??c</th>
          </tr>
        </thead>
        <tbody>{renderListShow(data.lichChieu)}</tbody>
      </Table>
      {detailShow !== null && typeModal === "detail" && (
        <ShowDetailModal
          detailShow={detailShow}
          show={modalShow}
          onHide={() => setModalShow(false)}
          hinhAnh={data.hinhAnh}
        />
      )}
    </Container>
  );
};

export default MovieShow;
