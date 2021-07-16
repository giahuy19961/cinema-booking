import { Button } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import "./styles.css";
import StarRatings from "react-star-ratings";
import { useDispatch } from "react-redux";
import { playTrailer } from "app/redux/reducer/trailer";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const handlePlayTrailer = (movie) => {
    dispatch(playTrailer(movie));
  };
  return (
    <Card className='card-movie text-center'>
      <Card.Img variant='top' src={movie.hinhAnh} className='card-movie-img' />
      <button
        onClick={() => handlePlayTrailer(movie)}
        className='card-play-trailer'
      >
        <PlayArrowIcon className='card-play-icon' />
      </button>
      <Card.Body>
        <Card.Title className='card-title'>{movie.tenPhim}</Card.Title>
        <Card.Text>
          <StarRatings
            rating={movie.danhGia / 2}
            starRatedColor='orange'
            numberOfStars={5}
            name='rating'
            starDimension='25px'
            starSpacing='3px'
          />
        </Card.Text>
        <Button className='btn-card' as={Link} to={`movie/${movie.maPhim}`}>
          MUA VÉ
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
