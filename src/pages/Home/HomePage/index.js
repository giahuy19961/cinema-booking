import React, { useEffect, useState } from "react";
import Banner from "components/Banner";
import { useDispatch, useSelector } from "react-redux";
import { listMovieApi } from "app/redux/reducer/listMovie";
import Trailer from "components/Trailer";
import "./styles.css";
import Menu from "components/Menu";
import Loading from "components/Loading";
import Showing from "components/Showing";
import Theaters from "components/Theaters";
import { listTheatersApi } from "app/redux/reducer/listTheaters";
import Footer from "components/Footer";

const HomePage = () => {
  // redux
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const listMovie = useSelector((state) => state.listMovieReducer.data);
  const { loading } = useSelector((state) => state.listMovieReducer);
  const { isPlay, trailer } = useSelector((state) => state.trailerReducer);
  console.log(loading);
  const handleModal = () => {
    if (isPlay) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    dispatch(listMovieApi());
    dispatch(listTheatersApi());
  }, []);
  useEffect(() => {
    handleModal();
  }, [isPlay]);
  if (loading) return <Loading />;
  return (
    <div id='home'>
      <section className='banner-container' id='menu'>
        <Banner movies={listMovie} />
        <Menu />
      </section>
      <div id='movies'>
        <Showing />
      </div>
      <Trailer isPlay={show} trailer={trailer} />
      <div>
        <Theaters />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
