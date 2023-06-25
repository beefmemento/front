import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Choice = () => {
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
        onClick={() => {
          gotodetail();
        }}
      >
        mentor
      </DetailContainer1>
      <DetailContainer1
        onClick={() => {
          gotodetail1();
        }}
      >
        mentee
      </DetailContainer1>
    </ChoiceContainer>
  );
};

const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 60px;
  margin: 10px 0px;
  text-align: center;
  justify-content: space-evenly;
  font-family: "Black Han Sans", sans-serif;
  text-shadow: 4px 2px 2px gray;
  color: white;
`;

const DetailContainer1 = styled.div`
  border-radius: 7px;
  width: 40%;
  height: 30px;
  text-align: center;
  border: 3px solid #c6e5f9;
  line-height: 30px;
  background-color: #C6E5F9;
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
