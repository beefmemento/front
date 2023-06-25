import React from "react";
import styled from "styled-components";
import Text from "./Text";
import { palette } from "../style/palette";

const Header = () => {
  return (
    <HeaderContainer bgColor={palette.brand_orange}>
      <Text weight={500} color={palette.brand_black}>
        MEMENTO
      </Text>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 72px;
  background-color: #C6E5F9;
`;

export default Header;
