import React from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { BsChatFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

const Menu = () => {
  return (
    <MenuContainer>
      <IconContainer>
        <BsChatFill style={{ color: "#ffffff" }} size={30} />
        <AiFillHome style={{ color: "#ffffff" }} size={35} />
        <BsFillPersonFill style={{ color: "ffffff" }} size={35} />
      </IconContainer>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  width: 100%;
  height: 72px;
  background-color: #b0d2e8;
  display: flex;

  align-items: center;
`;
const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export default Menu;
