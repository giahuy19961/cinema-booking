import InComing from "components/InComing";
import UpComing from "components/UpComing";
import React, { useState } from "react";

import {
  ShowingContainer,
  ShowingNav,
  ShowingCarousel,
  ShowingNavBtn,
} from "./styles";

const Showing = () => {
  const [isShowing, setShowing] = useState(true);
  return (
    <ShowingContainer>
      <ShowingNav>
        <ShowingNavBtn active={isShowing} onClick={() => setShowing(true)}>
          Phim đang chiếu
        </ShowingNavBtn>
        <ShowingNavBtn active={!isShowing} onClick={() => setShowing(false)}>
          Phim sắp chiếu
        </ShowingNavBtn>
      </ShowingNav>
      <ShowingCarousel>
        {isShowing ? <InComing /> : <UpComing />}
      </ShowingCarousel>
    </ShowingContainer>
  );
};

export default Showing;
