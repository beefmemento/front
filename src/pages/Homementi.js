import React, { useState } from "react";
import styled from "styled-components";
import MentoMain from "../components/MentoMain";
import Menu from "../components/Menu";
import Choice from "../components/Choice";
import MentiMain from "../components/MentiMain";

const HomeMenti = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Choice />
      <MentiMain />
      <Menu />
    </>
  );
};

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export default HomeMenti;
