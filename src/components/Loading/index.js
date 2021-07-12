import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      className='d-flex justify-content-center'
      style={{ marginTop: "100px" }}
    >
      <Spinner variant='info' />
    </div>
  );
};

export default Loading;
