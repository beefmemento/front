import React from "react";
import styled from "styled-components";
import Text from "./Text";
import { palette } from "../style/palette";

const Header = () => {
  return (
    <HeaderContainer bgColor={palette.brand_orange}>
      <Text weight={500} color={palette.brand_black}>
        멋쟁이사자처럼
      </Text>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  padding: 10px;
  background-color: ${({ bgColor }) => bgColor};
`;

export default Header;
