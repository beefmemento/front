import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { APIURL } from "../App";

// const postList = [
//   {
//     id: "1",
//     title: "네트워크",
//     professor: "소정민",
//     sem: "2023 1학기",
//   },
//   {
//     id: "2",
//     title: "캡스톤디자인",
//     professor: "정영민",
//     sem: "2023 1학기",
//   },
//   {
//     id: "2",
//     title: "캡스톤디자인",
//     professor: "정영민",
//     sem: "2023 1학기",
//   },
//   {
//     id: "2",
//     title: "캡스톤디자인",
//     professor: "정영민",
//     sem: "2023 1학기",
//   },
//   {
//     id: "2",
//     title: "캡스톤디자인",
//     professor: "정영민",
//     sem: "2023 1학기",
//   },
//   {
//     id: "2",
//     title: "캡스톤디자인",
//     professor: "정영민",
//     sem: "2023 1학기",
//   },
//   {
//     id: "2",
//     title: "캡스톤디자인",
//     professor: "정영민",
//     sem: "2023 1학기",
//   },
// ];

const MentoMain = () => {
  const [postList, setPostList] = useState();

  const navigate = useNavigate();

  const goToWrite = () => {
    navigate("/writemento");
  };

  const gotodetail = () => {
    navigate("/detail");
  };

  const getPostList = () => {
    const url = `${APIURL}/post/posts`;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setPostList(res);
      })
      .catch((err) => {
        console.log("getPostList err: ", err);
      });
  };

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <>
      <MainContent>
        <Title>내 과목</Title>
        <DetailSubject>
          {postList?.map((postList) => (
            <EachPost
              title={postList.title}
              professor={postList.professor}
              sem={postList.semester}
              onClick={gotodetail}
            >
              <Pk>
                {postList.title}
                <br />
                {postList.professor}
                <br />
                {postList.semester}
              </Pk>
            </EachPost>
          ))}
        </DetailSubject>
      </MainContent>
      <Register>
        <Button onClick={goToWrite}>과목 추가</Button>
      </Register>
    </>
  );
};

const DetailSubject = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  font-family: "locus_sangsang";
`;

const EachPost = styled.div`
  height: 140px;
  width: 140px;
  background-color: #c6e5f9;
  margin: 10px 20px;
  text-align: center;
  line-height: 30px;
  border-radius: 7px;
  cursor: pointer;
`;

const Pk = styled.div`
  margin-top: 20px;
`;

const MainContent = styled.div`
  height: 540px;
  margin: 0px 10px;
  text-align: center;
  border: 5px solid #c6e5f9;
  border-radius: 20px;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
  display: none;
  }
`;

const Title = styled.div`
  padding: 20px 0px;
  font-family: "locus_sangsang";
`;

const Register = styled.div`
  height: 60px;
  width: 100%;
  margin: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "locus_sangsang";
`;

const Button = styled.div`
  padding: 15px 20px;
  background-color: #c6e5f9;
  border-radius: 8px;
  cursor: pointer;
`;

export default MentoMain;
