import React, { useState } from "react";
import styled from "styled-components";
import MentoMain from "../components/MentoMain";
import Menu from "../components/Menu";
import Choice from "../components/Choice";

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Choice />
      <MentoMain />
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

export default Home;
