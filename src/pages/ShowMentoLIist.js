import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import { useNavigate } from "react-router-dom";

const postList = [
  {
    id: "1",
    title: "자료구조 멘토",
    contents: "자료구조 탑",
    semester: "23-1",
    gpa: "4.30",
    professor: "장형수",
    mentor: "멋사",
    subject: "자료구조:장형수",
  },
  {
    id: "2",
    title: "솔직히 멋사 폼 미친거 아님?",
    contents: "서강 멋사 폼 미쳤다",
    semester: "22-2",
  },
];

const ShowMentoList = () => {
  const navigate = useNavigate();

  const goToTeacherDetail = () => {
    navigate("/teacherdetail");
  };

  return (
    <>
      <MainContent>
        <Title>멘토 찾기</Title>

        <BoxContainer>
          {postList.map((post) => (
            <Box
              key={post.id}
              title={post.title}
              postID={post.id}
              contents={post.contents}
              semester={post.semester}
              gpa={post.gpa}
              professor={post.professor}
              mentor={post.mentor}
              subject={post.subject}
              onClick={goToTeacherDetail}
            >
              {post.title}
              <br />
              {post.contents}
              <br />
              {post.semester}
              <br />
              {post.gpa}
              <br />
              {post.professor}
              <br />
              {post.mentor}
              <br />
              {post.subject}
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
  font-family: "SUITE-Regular";
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
  height: 100px;
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
`;

export default ShowMentoList;
