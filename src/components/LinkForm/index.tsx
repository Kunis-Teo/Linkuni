import React, {useEffect, useState} from "react";
import { FaPlus, FaPen } from "react-icons/fa";
import UrlFormContent from "../Form/UrlFormContent";
import styled from "styled-components";
import axios from "axios";

const StyledButton = styled.button`
  background-color: #7a5ccd;
  margin: 5px;
  border: none;
  padding: 7px 10px;
  border-radius: 50%;
  color: #fff;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    scale: 1.01;
  }
`;

// props: linkData from linkCard
const LinkForm = ({ linkData }) => {
  const [visible, setVisible] = useState(false);
  const handleModalOpen = () => setVisible(true);
  const handleModalClose = () => setVisible(false);
  const handleModalConfirm = () => {
    alert("저장");
  };

  const getTagList =
      async () => {
        try {
            const res = await axios({
                url: 'tag/list', // 통신할 웹문서
                method: 'get', // 통신할 방식
            })
            return res
        } catch (err) {
          console.log(err)
        }
      }
    // const getCategoryList =
    //     async () => {
    //         try {
    //             const res = await axios({
    //                 url: '', // 통신할 웹문서
    //                 method: 'get', // 통신할 방식
    //             })
    //             return res
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }

  useEffect(()=>{
        getTagList()
      // getCategoryList()
  },[])
  return (
    <>
      <StyledButton onClick={handleModalOpen}>
        {linkData ? <FaPen /> : <FaPlus />}
      </StyledButton>
      {visible && (
        <UrlFormContent
          linkData={linkData}
          onConfirm={handleModalConfirm}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

export default LinkForm;
