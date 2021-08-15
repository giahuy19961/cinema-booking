import React from "react";
import { Link } from "react-router-dom";
import {
  ChartContent,
  ChartWrap,
  TextTitle,
  TextValue,
  WrapCount,
} from "./style";

const ChartContainer = (props) => {
  return (
    <ChartWrap {...props}>
      <WrapCount>
        <TextTitle>Total {props.name}:</TextTitle>
        <TextValue>{props.total}</TextValue>
      </WrapCount>
      <ChartContent as={Link} to={props.url}>
        {props.children}
      </ChartContent>
      {/* <BtnWrap as={Link} to={props.url}>
        <WrapButton> List {props.name}</WrapButton>
      </BtnWrap> */}
    </ChartWrap>
  );
};
export default ChartContainer;
