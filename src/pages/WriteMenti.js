import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostTitle,
  PostWriteDiv,
  PostTitleDiv,
  MentorInput,
  SubjectInput,
} from "../style/styledComponents";

const SubmitComponent = React.memo(({ onSubmit }) => {
  return (
    <PostSubmitDiv onClick={onSubmit}>
      <PostSubmit>작성완료</PostSubmit>
    </PostSubmitDiv>
  );
});

const WriteTitle = React.memo(() => {
  return (
    <>
      <PostTitleDiv>
        <PostTitle>글쓰기</PostTitle>
      </PostTitleDiv>
    </>
  );
});

const WriteMenti = () => {
  const [inputs, setInputs] = useState({
    title: "",
    contents: "",
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

  const contentsInput = useRef(null);
  const mentorInput = useRef(null);
  const subjectInput = useRef(null);

  const onKeyup = (e) => {
    if (e.key === "Enter") {
      contentsInput.current.focus();
    }
  };

  const navigate = useNavigate();
  // const onSubmit = async () => {
  //   try {
  //     //const url = `${APIURL}/api/posts/`;
  //     const res = await axios.post(url, {
  //       title: inputs.title,
  //       contents: inputs.contents,
  //     });

  //     console.log(res);

  //     alert("글이 작성되었습니다!");
  //     navigate("/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    mentorInput.current.focus();
    subjectInput.current.focus();
  }, []);

  return (
    <PostSection>
      <WriteTitle />

      <PostWriteDiv>
        <MentorInput
          name="mentor"
          type="text"
          placeholder="닉네임"
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
      </PostWriteDiv>

      <SubmitComponent />
    </PostSection>
  );
};

export default WriteMenti;
