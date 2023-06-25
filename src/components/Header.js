import React from "react";
import styled from "styled-components";
import { palette } from "../style/palette";

const Header = () => {
  return (
    <HeaderContainer bgColor={palette.brand_orange}>MEMENTO</HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 72px;
  background-color: #C6E5F9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Black Han Sans", sans-serif;
  font-size: 40px;
`;

export default Header;
