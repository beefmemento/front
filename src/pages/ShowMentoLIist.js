import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { APIURL } from "../App";

// const postList = [
//   {
//     id: "1",
//     title: "자료구조 멘토",
//     contents: "자료구조 탑",
//     semester: "23-1",
//     gpa: "4.30",
//     professor: "장형수",
//     mentor: "멋사",
//     subject: "자료구조:장형수",
//   },
//   {
//     id: "2",
//     title: "솔직히 멋사 폼 미친거 아님?",
//     contents: "서강 멋사 폼 미쳤다",
//     semester: "22-2",
//   },
// ];

const ShowMentoList = () => {
  const [postList, setPostList] = useState();

  const navigate = useNavigate();

  const goToTeacherDetail = () => {
    navigate("/teacherdetail");
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
        <Title>멘토 찾기</Title>

        <BoxContainer>
          {postList?.map((post) => (
            <Box
              key={post.id}
              title={post.title}
              postID={post.id}
              contents={post.content}
              semester={post.semester}
              gpa={post.gpa}
              professor={post.professor}
              mentor={post.mentor}
              subject={post.subject}
              onClick={goToTeacherDetail}
            >
                            제목: {post.title}
              <br />
              <br />
              수강 학기: {post.semester}
              <br />
              최종 학점: {post.gpa}
              <br />
              교수님: {post.professor}
              <br />
              멘토 명: {post.mentor}
              <br />
              과목 명: {post.subject}
              <br />
            </Box>
          ))}
        </BoxContainer>
      </MainContent>
      <Menu />
    </>
  );
};

const MainContent = styled.div`
  height: 670px;
  margin: 10px 10px;
  text-align: center;
  border: 5px solid #c6e5f9;
  border-radius: 20px;
  overflow-y: scroll;
  padding: 5px;
  font-family: "locus_sangsang";
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
  display: none;
  }
`;

const Title = styled.div`
  padding: 20px 0px;
`;

const Box = styled.div`
  background-color: #c6e5f9;
  height: auto;
  width: 300px;
  padding: 10px;
  border-radius: 7px;
  margin: 5px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  text-align: left;
  maigin: 10px 30px;
`;

export default ShowMentoList;
