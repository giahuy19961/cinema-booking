import { listUserApi } from "app/redux/reducer/Admin/listUser";
import { listMovieApi } from "app/redux/reducer/listMovie";
import { listTheatersApi } from "app/redux/reducer/listTheaters";
import AccountChart from "components/Chart/AccountChart";
import MovieChart from "components/Chart/MovieChart";
import TheaterChart from "components/Chart/TheaterChart";
import TicketChart from "components/Chart/TicketChart";
import Loading from "components/Loading";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const DashBoard = () => {
  const dispatch = useDispatch();

  const loadingListMovie = useSelector(
    (state) => state.listMovieReducer.loading
  );
  const loadingListUser = useSelector((state) => state.listUserReducer.loading);
  const loadingListTheater = useSelector(
    (state) => state.listTheatersReducer.loading
  );
  const loading = loadingListMovie || loadingListUser || loadingListTheater;
  useEffect(() => {
    dispatch(listMovieApi());
    dispatch(listUserApi());
    dispatch(listTheatersApi());
  }, []);
  if (loading) return <Loading />;
  return (
    <Container>
      <div className='row'>
        <div className='col-xxl-3 col-sm-6'>
          <MovieChart />
        </div>
        <div className='col-xxl-3 col-sm-6'>
          <AccountChart />
        </div>
        <div className='col-xxl-6 col-sm-12'>
          <TheaterChart />
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <TicketChart />
        </div>
      </div>
    </Container>
  );
};

export default DashBoard;
