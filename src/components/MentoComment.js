import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { APIURL } from "../App";

// const postList = [
//   {
//     id: "1",
//     title: "네트워크",
//     professor: "소정민",
//     sem: "2023 1학기",
//     intro: "열심히 하겠습니다~ A+ 보장!",
//   },
// ];

const MentoComment = () => {
  const [postList, setPostList] = useState();

  const navigate = useNavigate();
  const gotodetail = () => {
    navigate("/detail");
  };

  const getPostList = () => {
    const url = `${APIURL}/post/posts/`;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setPostList(res.data);
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
        <Title>
          {postList?.map((postList) => (
            <p
              title={postList.title}
              professor={postList.professor}
              sem={postList.semester}
              onClick={gotodetail}
            >
            </p>
          ))}
        </Title>
        <DetailSubject>
          {postList?.map((postList) => (
            <EachPost
              title={postList.title}
              professor={postList.professor}
              sem={postList.semester}
              intro={postList.content}
            >
              <Pk>
                과목 명: {postList.title}
                <br />
                교수님: {postList.professor} 교수님
                <br />
                수강 학기: {postList.semester}
                <br />
                <br />
                소개: {postList.content}
              </Pk>
            </EachPost>
          ))}
        </DetailSubject>
      </MainContent>
      <Register>
        <Button>삭제하기</Button>
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
  height: auto;
  width: 400px;
  background-color: #c6e5f9;
  margin: 10px 20px;
  margin-bottom:20px;
  
  line-height: 30px;
  border-radius: 7px;
  cursor: pointer;
`;

const Pk = styled.div`
  margin: 20px 20px;
  text-align: left;
`;

const MainContent = styled.div`
  height: 540px;
  margin: 0px 10px;
  text-align: center;
  border: 3px solid #c6e5f9;
  border-radius: 20px;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  font-family: "locus_sangsang";
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
  font-family: "locus_sangsang";
`;

const Button = styled.div`
  padding: 20px;
  background-color: #c6e5f9;
  border-radius: 8px;
`;
export default MentoComment;
