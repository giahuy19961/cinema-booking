import CarouselContainer from "components/Carousel";
import React from "react";
import { useSelector } from "react-redux";

const UpComing = (props) => {
  const listMovie = useSelector((state) => state.listMovieReducer.data);

  return (
    <CarouselContainer {...props} listMovie={listMovie} type='upComing'>
      {props.children}
    </CarouselContainer>
  );
};

export default UpComing;
