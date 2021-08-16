import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div
      className='d-flex justify-content-center'
      style={{ marginTop: "200px" }}
    >
      <ReactLoading type={"bars"} color={"#ff0000"} height={300} width={250} />
    </div>
  );
};

export default Loading;
