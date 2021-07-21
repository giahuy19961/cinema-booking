import Footer from "components/Footer";
import React from "react";

const TicketPage = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <div>
      TicketPage was params {id}
      <Footer />
    </div>
  );
};

export default TicketPage;
