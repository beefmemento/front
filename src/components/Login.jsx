import React from "react";
import styled from "styled-components";
import KakaoLogin from "../assets/kakao_login.png";
import Text from "./Text";

const AfterLogin = () => {
  return (
    <LoginContainer>
      <Text>이름 : 한우석</Text>
      <ProfileImage></ProfileImage>
    </LoginContainer>
  );
};

const BeforeLogin = () => {
  return (
    <LoginContainer>
      <LoginContainer>
        <Text>로그인 해주세요</Text>
        <img src={KakaoLogin} alt="loginBanner" />
      </LoginContainer>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ProfileImage = styled.div`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  border: 1px solid black;
`;

export { AfterLogin, BeforeLogin };
