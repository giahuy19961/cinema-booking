import Footer from "components/Footer";
import React from "react";

const TicketPage = ({computedMatch:{params:{id}}}) => {
  return (
    <div>
      TicketPage was params {id}
      <Footer />
    </div>
  );
};

export default TicketPage;
