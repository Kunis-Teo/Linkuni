import React, { useEffect, useState } from "react";
import { FaPaperclip } from "react-icons/fa";
import { toast } from "react-toastify";

import Button from "@/components/common/Button";
import Selector from "@/components/Selector";
import FormInput from "@/components/Form/FormInput/FormInput";
import API from "@/utils/API";
import {
  StyledMask,
  StyledModalWrapper,
  StyledTitle,
} from "./UrlFormContent.styled";

type UrlFormProps = {
  linkData?: string | null;
  onConfirm: () => void;
  onClose: () => void;
};
/** ************************************************************
 *  모달 생성/수정 content 컴포넌트
 ************************************************************* */
function UrlFormContent({ linkData, onConfirm, onClose }: UrlFormProps) {
  const [close, setClose] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedTag, setSelectedTag] = useState([]);

  const [category, setCategory] = useState<any>([]);
  const [teg, setTag] = useState<any>([]);

  /* eslint-disable-next-line */
  const [formData, setFormData] = useState<any>([]);

  const handleModalClose = () => {
    setClose(true);
  };


  const createLinkAction = async (payload) => {
    try {
      const result = await API.post("/url/add", {
        url: payload.link,
        memo: payload.memo,
        category_id: selectedCategory[0]
          ? selectedCategory[selectedCategory.length - 1].value
          : false,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        tagList: ArrayChangeKey2(selectedTag),
      });
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      setCategory(ArrayChangeKey(result.data.categoryList));
      await toast.success("생성 완료");
    } catch (err) {
      toast.error("생성 에러");
    }
  };

  /** ****************************************************************
   * 취소 버튼 핸들러
   ***************************************************************** */
  const handleAnimationEnd = () => {
    if (close) {
      onClose();
    }
  };

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    const urlFormInput = new FormData(e.target);
    await setFormData(Object.fromEntries(urlFormInput.entries()));
    await createLinkAction(Object.fromEntries(urlFormInput.entries()));

  };

  /** ****************************************************************
   * 저장 버튼 핸들러
   ***************************************************************** */
  const handleConfirm = async () => {
    onConfirm();
    handleModalClose();
  };

  /** ****************************************************************
   * Selector options 데이터 변경 함수
   ***************************************************************** */
  const ArrayChangeKey = (arr) => {
    const newArr = [];
    /* eslint-disable-next-line */
    arr.map((item) => {
      newArr.push({ label: item.name, value: item.id });
    });
    return newArr;
  };

  const ArrayChangeKey2 = (arr) => {
    const newArr = [];
    /* eslint-disable-next-line */
    arr.map((item) => {
      newArr.push({ tag_id: item.value });
    });
    return newArr;
  };

  useEffect(() => {
    const getCategoryData = async () => {
      const result = await API.get("/category/list");
      setCategory(ArrayChangeKey(result.data.categoryList));
    };
    const getTagData = async () => {
      const result = await API.get("/tag/list");
      setTag(ArrayChangeKey(result.data.tagDTOList));
    };

    getCategoryData();
    getTagData();
  }, []);

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
            options={category}
            selected={selectedCategory}
            setSelected={setSelectedCategory}
            singleSelect
            selectAll={false}
          />
          {/* 태그 */}
          <Selector
            title="태그"
            options={teg}
            selected={selectedTag}
            setSelected={setSelectedTag}
            singleSelect={false}
            selectAll
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
