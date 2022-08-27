import React, { useState, useRef } from "react";
import { FaLink } from "react-icons/fa";
import FormInput from "./FormInput";

const UrlFormContent = ({ linkData }) => {
  const [inputData, setInputData] = useState<string | null>(null);

  const handleClickSubmit = (e) => {
    e.preventDefault();
    const urlFormInput = new FormData(e.target);
    console.log(Object.fromEntries(urlFormInput.entries()));
  };

  return (
    <form onSubmit={handleClickSubmit}>
      <h3>
        <FaLink />
        {linkData.length ? "링크 수정" : "링크 추가"}
      </h3>
      <FormInput name="link" label="링크" />
      <FormInput name="title" label="제목" />
      <FormInput name="memo" label="메모" height={10} />
      {/* 카테고리 */}
      {/* 태그 */}
      <button>Submit</button>
    </form>
  );
};

export default UrlFormContent;
