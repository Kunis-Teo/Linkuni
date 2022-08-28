import React, { useState } from "react";
import { FaPaperclip } from "react-icons/fa";
import Button from "@/components/common/Button";
import Selector, { DEFAULT_OPTIONS } from "@/components/Selector";
import FormInput from "@/components/Form/FormInput/FormInput";
import {
  StyledMask,
  StyledTitle,
  StyledModalWrapper,
} from "./UrlFormContent.styled";

type UrlFormProps = {
  linkData?: string | null;
  onConfirm: () => void;
  onClose: () => void;
};

function UrlFormContent({ linkData, onConfirm, onClose }: UrlFormProps) {
  const [close, setClose] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedTag, setSelectedTag] = useState([]);

  const handleModalClose = () => {
    setClose(true);
    setClose(true);
  };

  const handleConfirm = () => {
    onConfirm();
    handleModalClose();
  };

  const handleAnimationEnd = () => {
    if (close) {
      onClose();
    }
  };
  const handleClickSubmit = (e) => {
    e.preventDefault();
    const urlFormInput = new FormData(e.target);
    console.log(Object.fromEntries(urlFormInput.entries()));
  };

  return (
    <StyledMask close={close} onAnimationEnd={handleAnimationEnd}>
      <StyledModalWrapper close={close}>
        <form onSubmit={handleClickSubmit}>
          <StyledTitle>
            <FaPaperclip />
            <span> {linkData ? "링크 수정" : "링크 추가"}</span>
          </StyledTitle>
          <FormInput name="link" label="링크" />
          <FormInput name="title" label="제목" />
          {/* 카테고리 */}
          <Selector
            title="카테고리"
            options={DEFAULT_OPTIONS}
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
          {/* 태그 */}
          <Selector
            title="태그"
            options={DEFAULT_OPTIONS}
            selected={selectedTag}
            setSelected={setSelectedTag}
          />
          <FormInput name="memo" label="메모" height="50px" />

          <div className="button-group">
            <Button color="gray" onClick={handleModalClose}>
              CANCEL
            </Button>
            <Button color="#F6BC4B" onClick={handleConfirm}>
              SAVE
            </Button>
          </div>
        </form>
      </StyledModalWrapper>
    </StyledMask>
  );
}

export default UrlFormContent;
