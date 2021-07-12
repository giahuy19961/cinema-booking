import { Button } from "react-bootstrap";
import React from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { closeTrailer } from "app/redux/reducer/trailer";
import ReactPlayer from "react-player";
import CloseIcon from "@material-ui/icons/Close";
import "./styles.css";

const Trailer = ({ isPlay, trailer }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeTrailer());
  };
  if (!isPlay) return null;
  const opts = {
    height: 480,
    width: "100%",
  };
  const { width, height } = opts;
  return (
    <Modal
      show={isPlay}
      onHide={handleClose}
      animation={false}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body>
        <ReactPlayer
          width={width}
          height={height}
          url={trailer !== null ? trailer.trailer : ""}
        />
        <button className='button-close-trailer' onClick={handleClose}>
          <CloseIcon className='button-close-icon' />
        </button>
      </Modal.Body>
    </Modal>
  );
};

export default Trailer;
