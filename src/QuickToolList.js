import React from "react";
import {
  FaEnvelope,
  FaHouseDamage,
  FaMap,
  FaQuestionCircle,
} from "react-icons/fa";
import styled from "react-emotion";
import Badge from "./Badge";

const QuickToolListStyle = styled("div")`
  display: flex;
  width: 7rem;
  margin-top: 0.25rem;
  justify-content: space-between;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.darkGray};
  a {
    text-decoration: none;
    color: currentColor;
  }
  a:visited {
    color: currentColor;
  }
`;

function QuickToolList() {
  return (
    <QuickToolListStyle>
      <a href="#">
        <FaHouseDamage />
      </a>
      <a href="#">
        <FaMap />
      </a>
      <a href="#">
        <FaQuestionCircle />
      </a>
      <Badge value={5}>
        <a href="#">
          <FaEnvelope />
        </a>
      </Badge>
    </QuickToolListStyle>
  );
}

export default QuickToolList;
