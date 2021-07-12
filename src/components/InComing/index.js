import CarouselContainer from "components/Carousel";
import React from "react";
import { useSelector } from "react-redux";

const InComing = (props) => {
  const listMovie = useSelector((state) => state.listMovieReducer.data);
 
  return (
    <CarouselContainer {...props}  listMovie={listMovie}>
      {props.children}
    </CarouselContainer>
  );
};

export default InComing;
