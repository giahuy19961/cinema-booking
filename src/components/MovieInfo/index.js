import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StarRatings from "react-star-ratings/build/star-ratings";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import {
  MovieInfoWrap,
  MovieRating,
  MovieInfoContainer,
  MovieInfoContent,
  MovieInfoTitle,
  MovieInfoImg,
  MovieShowTime,
  MovieShowName,
  BuyTicketBtn,
  MovieBackground,
  MovieInfoContentRating,
  MovieInfoImgWrap,
  MoviePlayTrailer,
} from "./styles.js";
import "./style.css";
import { playTrailer } from "app/redux/reducer/trailer.js";
import { NavHashLink } from "react-router-hash-link";

const MovieInfo = () => {
  const dispatch = useDispatch();
  const { tenPhim, maPhim, hinhAnh, moTa, ngayKhoiChieu, danhGia } =
    useSelector((state) => state.listShowMovieReducer.data);
  const movie = useSelector((state) => state.listShowMovieReducer.data);
  console.log(tenPhim, maPhim, hinhAnh, moTa, danhGia);
  const handlePlayTrailer = (movie) => {
    dispatch(playTrailer(movie));
  };
  return (
    <MovieInfoWrap>
      <MovieBackground background={`url(${hinhAnh})`} />
      <MovieInfoContainer>
        <MovieInfoContent>
          <MovieInfoImgWrap className='movie-info-trailer-wrap'>
            <MovieInfoImg src={hinhAnh} />
            <MoviePlayTrailer
              className='movie-info-trailer'
              onClick={() => handlePlayTrailer(movie)}
            >
              <PlayArrowIcon className='movie-info-play' />
            </MoviePlayTrailer>
          </MovieInfoImgWrap>
          <MovieInfoTitle>
            <MovieShowName>{tenPhim}</MovieShowName>
            <MovieShowTime>
              Ngày khởi chiếu: {new Date(ngayKhoiChieu).toLocaleDateString()}
            </MovieShowTime>
            <BuyTicketBtn as={NavHashLink} to={`/movie/${maPhim}/#lich-chieu`}>
              Mua vé
            </BuyTicketBtn>
          </MovieInfoTitle>
        </MovieInfoContent>
        <MovieInfoContentRating>
          <MovieShowName>Rating</MovieShowName>
          <MovieRating>{danhGia}</MovieRating>
          <StarRatings
            rating={danhGia / 2}
            starRatedColor='yellow'
            numberOfStars={5}
            name='rating'
            starDimension='25px'
            starSpacing='3px'
          />
        </MovieInfoContentRating>
      </MovieInfoContainer>
    </MovieInfoWrap>
  );
};

export default MovieInfo;
