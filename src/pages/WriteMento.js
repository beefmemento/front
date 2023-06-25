import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostTitle,
  PostWriteDiv,
  PostTitleDiv,
  ContentsInput,
  TitleInput,
  ProfessorInput,
  SemesterInput,
  GPAInput,
  MentorInput,
  SubjectInput,
} from "../style/styledComponents";
import axios from "axios";
import { APIURL } from "../App";

const SubmitComponent = React.memo(({ onSubmit }) => {
  return (
    <PostSubmitDiv onClick={onSubmit}>
      <PostSubmit>작성완료</PostSubmit>
    </PostSubmitDiv>
  );
});

const WriteTitle = React.memo(() => {
  return (
    <PostTitleDiv>
      <PostTitle>글쓰기</PostTitle>
    </PostTitleDiv>
  );
});

const WriteMento = () => {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    mentor: "",
    subject: "",
    professor: "",
    semester: "",
    gpa: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const titleInput = useRef(null);
  const contentsInput = useRef(null);
  const mentorInput = useRef(null);
  const subjectInput = useRef(null);
  const professorInput = useRef(null);
  const semesterInput = useRef(null);
  const gpaInput = useRef(null);

  const onKeyup = (e) => {
    if (e.key === "Enter") {
      contentsInput.current.focus();
    }
  };

  const navigate = useNavigate();
  const onSubmit = async () => {
    try {
      const url = `${APIURL}/post/posts/`;
      // console.log(url);
      console.log(inputs);
      const res = await axios.post(url, 
        inputs,
      );
      console.log(res);

      alert("글이 작성되었습니다!");
      navigate("/");
     
    } catch (err) {
      console.log(err);
    }
    
  };

  useEffect(() => {
    titleInput.current.focus();
    mentorInput.current.focus();
    subjectInput.current.focus();
    professorInput.current.focus();
    semesterInput.current.focus();
    gpaInput.current.focus();
  }, []);

  return (
    <PostSection>
      <WriteTitle />

      <PostWriteDiv>
        <TitleInput
          name="title"
          type="text"
          placeholder="제목을 입력하세요."
          onChange={onChange}
          value={inputs.title}
          ref={titleInput}
          onKeyUp={onKeyup}
        />
        <ContentsInput
          name="contents"
          cols="30"
          rows="10"
          placeholder="내용을 입력하세요."
          onChange={onChange}
          value={inputs.contents}
          ref={contentsInput}
        />
        <MentorInput
          name="mentor"
          type="text"
          placeholder="유저 이름"
          onChange={onChange}
          value={inputs.mentor}
          ref={mentorInput}
          onKeyUp={onKeyup}
        />
        <SubjectInput
          name="subject"
          type="text"
          placeholder="과목"
          onChange={onChange}
          value={inputs.subject}
          ref={subjectInput}
          onKeyUp={onKeyup}
        />
        <ProfessorInput
          name="professor"
          type="text"
          placeholder="교수님"
          onChange={onChange}
          value={inputs.professor}
          ref={professorInput}
          onKeyUp={onKeyup}
        />
        <SemesterInput
          name="semester"
          type="text"
          placeholder="수강 학기"
          onChange={onChange}
          value={inputs.semester}
          ref={semesterInput}
          onKeyUp={onKeyup}
        />
        <GPAInput
          name="gpa"
          type="text"
          placeholder="학점"
          onChange={onChange}
          value={inputs.gpa}
          ref={gpaInput}
          onKeyUp={onKeyup}
        />
      </PostWriteDiv>

      <SubmitComponent onSubmit={onSubmit} />
    </PostSection>
  );
};

export default WriteMento;
