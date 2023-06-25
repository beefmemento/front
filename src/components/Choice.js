import React from "react";
import styled from "styled-components";
import KakaoLogin from "../assets/kakao_login.png";
import Text from "./Text";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Choice = () => {
  const [color, setColor] = useState("white");
  const [color1, setColor1] = useState("white");

  const navigate = useNavigate();
  const gotodetail = () => {
    navigate("/");
  };
  const navigate1 = useNavigate();
  const gotodetail1 = () => {
    navigate("/menti");
  };

  return (
    <ChoiceContainer>
      <DetailContainer1
        style={{ backgroundColor: `${color}` }}
        onClick={() => {
          setColor("#C6E5F9");
          setColor1("white");
          gotodetail();
        }}
      >
        mento
      </DetailContainer1>
      <DetailContainer1
        style={{ backgroundColor: `${color1}` }}
        onClick={() => {
          setColor1("#C6E5F9");
          setColor("white");
          gotodetail1();
        }}
      >
        menti
      </DetailContainer1>
    </ChoiceContainer>
  );
};

const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  width: 100%;
  height: 60px;
  margin: 10px 0px;
  text-align: center;
  justify-content: space-evenly;
  font-family: "Black Han Sans", sans-serif;
`;

const DetailContainer1 = styled.div`
  border-radius: 7px;
  width: 40%;
  height: 30px;
  text-align: center;
  border: 3px solid #c6e5f9;
  line-height: 30px;
`;

const DetailContainer2 = styled.div`
  border-radius: 7px;
  width: 40%;
  height: 30px;
  text-align: center;
  border: 2px solid #c6e5f9;
  line-height: 30px;
  background-color: #c6e5f9;
`;

export default Choice;
