import React from "react";
import { useDispatch } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { playTrailer } from "app/redux/reducer/trailer";
import "./styles.css";
import { Link } from "react-router-dom";

const Banner = ({ movies }) => {
  const dispatch = useDispatch();
  const handlePlayTrailer = (movie) => {
    dispatch(playTrailer(movie));
  };
  const renderBanner = (listMovie) => {
    return listMovie?.map((movie, index) => {
      return (
        <Carousel.Item key={index} as={Link} to={`movie/${movie.maPhim}`}>
          <img src={movie.hinhAnh} alt='Third slide' />
          <Carousel.Caption>
            <button
              onClick={() => handlePlayTrailer(movie)}
              className='carousel-item-play'
            >
              <PlayArrowIcon className='carousel-play-icon' />
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  };
  const configCarousel = {
    nextLabel: "",
    prevLabel: "",
    pause: "hover",
  };
  return (
    <Carousel
      nextLabel={configCarousel.nextLabel}
      prevLabel={configCarousel.prevLabel}
      fade
      pause={configCarousel.pause}
    >
      {renderBanner(movies)}
    </Carousel>
  );
};

export default Banner;
