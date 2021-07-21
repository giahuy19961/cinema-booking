import React from "react";
import Carousel from "react-grid-carousel";
import MovieCard from "components/MovieCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./styles.css";

const CarouselContainer = (props) => {
  const listMovie = props.listMovie;
  // const configCarousel = {
  //   nextLabel: "",
  //   prevLabel: "",
  //   prevIcon: (
  //     <FaAngleLeft
  //       class='carousel-control-prev-icon movie-carousel-prev-icon'
  //       aria-hidden='true'
  //     ></FaAngleLeft>
  //   ),
  //   nextIcon: (
  //     <FaAngleRight
  //       class='carousel-control-prev-icon movie-carousel-next-icon'
  //       aria-hidden='true'
  //     ></FaAngleRight>
  //   ),
  //   pause: "hover",
  // };
  const config = {
    cols: 4,
    rows: 2,
    gap: 20,
    loop: true,
    autoplay: 5000,
    arrowLeft: (
      <FaAngleLeft class='movie-carousel-prev-icon' aria-hidden='true' />
    ),
    arrowRight: (
      <FaAngleRight class='movie-carousel-next-icon' aria-hidden='true' />
    ),
    responsiveLayout: [
      {
        breakpoint: 1200,
        cols: 3,
      },
      {
        breakpoint: 992,
        cols: 2,
      },
      {
        breakpoint: 767,
        cols: 2,
        rows: 1,
      },
    ],
    mobileBreakpoint: 0,
  };

  const renderListMovie = (list) => {
    return list?.map((movie, index) => {
      return (
        <Carousel.Item className='movie-carousel-item' key={index}>
          <MovieCard movie={movie} />
        </Carousel.Item>
      );
    });
  };

  return (
    <Carousel
      // nextLabel={configCarousel.nextLabel}
      // prevLabel={configCarousel.prevLabel}
      // pause={configCarousel.pause}
      // arrowLeft={config.arrowLeft}
      // arrowRight={config.arrowRight}
      id='movieCarousel'
      cols={config.cols}
      rows={config.rows}
      gap={config.gap}
      autoplay={config.autoplay}
      loop
      responsiveLayout={config.responsiveLayout}
      mobileBreakpoint={config.mobileBreakpoint}
    >
      {renderListMovie(listMovie)}
    </Carousel>
  );
};

export default CarouselContainer;
