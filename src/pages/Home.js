import React, { useState } from "react";
import styled from "styled-components";
import { AfterLogin, BeforeLogin } from "../components/Login";

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <HomeContainer>{isLogin ? <AfterLogin /> : <BeforeLogin />}</HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export default Home;
