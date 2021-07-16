import { listShowMovieApi } from "app/redux/reducer/listShowMovie";
import MovieInfo from "components/MovieInfo";
import ShowTime from "components/ShowTime";
import React, { useEffect, useState } from "react";
import Loading from "components/Loading";
import { useDispatch, useSelector } from "react-redux";
import Trailer from "components/Trailer";

const DetailPage = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const loading = useSelector((state) => state.listShowMovieReducer.loading);
  const { isPlay, trailer } = useSelector((state) => state.trailerReducer);

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
  useEffect(() => {
    dispatch(listShowMovieApi(id));
  }, [id]);

  if (loading) return <Loading />;
  return (
    <>
      <MovieInfo />
      <ShowTime />
      <Trailer isPlay={show} trailer={trailer} />
    </>
  );
};

export default DetailPage;
