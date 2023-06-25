import React from "react";
import styled from "styled-components";
import KakaoLogin from "../assets/kakao_login.png";
import Text from "./Text";

const MentoMain = () => {
  return (
    <>
      <MainContent>
        <Title>내 과목</Title>
      </MainContent>
      <Register>
        <Button>과목 추가</Button>
      </Register>
    </>
  );
};

const MainContent = styled.div`
  height: 540px;
  margin: 0px 10px;
  text-align: center;
  border: 5px solid #C6E5F9;
  border-radius: 20px;
`;

const Title = styled.div`
  padding: 20px 0px;
`;

const Register = styled.div`
  height: 60px;
  width: 100%;
  margin: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
`;

const Button = styled.div`
 padding: 20px;
`;
export default MentoMain;
