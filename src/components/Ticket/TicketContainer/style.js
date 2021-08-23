import styled from "styled-components";

export const TicketWrap = styled.div`
  width: 100%;
  height: 800px;
  border: 1px solid #ccc;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  justify-content: center;
  margin: 10px auto;
  box-shadow: 2px 2px 2px 1px #ff2c1f;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1400px) {
    height: auto;
  }
`;
export const TicketScreen = styled.div`
  background-color: #ff2c1f;
  color: #fff;
  height: 30px;
  width: 90%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-top: 25px;
  text-align: center;
`;
export const TicketContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow-x: auto;
  align-items: center;
`;

export const TicketSeat = styled.button`
  color: #000;
  text-align: center;
  width: 45px;
  overflow: hidden;
  height: 45px;
  position: relative;
  margin: 5px;
  cursor: pointer;
  display: inline-block;
  background-color: #fff;
  border: none;
  &:hover {
    color: #ff2c1f;
  }
`;
export const TicketBooked = styled(TicketSeat)`
  color: #ccc;
  &:hover {
    color: #ccc;
    cursor: default;
    user-select: none;
  }
`;
export const TicketChoose = styled(TicketSeat)`
  color: #ff2c1f;
  &:hover {
    color: #ff2c1f;
  }
`;
export const TicketVip = styled(TicketSeat)`
  color: #ff8300;
`;
export const TicketNumber = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -55%);
  font-size: 0.8rem;
  color: #fff;
`;
