import React from "react";

const DetailPage = ({
  match: {
    params: { id },
  },
}) => {
  return <div>Params : {id}</div>;
};

export default DetailPage;
