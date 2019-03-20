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
  }
  a:visited {
    color: currentColor;
  }

  .quick-list-wrapper {
    position: relative;

    .badge {
      position: absolute;
      top: -7px;
      left: -7px;
    }
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
      <span className="quick-list-wrapper">
        <a href="#">
          <Badge>5</Badge>
          <FaEnvelope />
        </a>
      </span>
    </QuickToolListStyle>
  );
}

export default QuickToolList;
