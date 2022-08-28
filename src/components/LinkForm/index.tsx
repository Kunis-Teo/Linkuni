import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPlus, FaPen } from 'react-icons/fa';

import UrlFormContent from '@/components/Form/UrlFormContent';
import { StyledButton } from './LinkForm.styled';

// props: linkData from linkCard
function LinkForm({ linkData }) {
  const [visible, setVisible] = useState(false);
  const handleModalOpen = () => setVisible(true);
  const handleModalClose = () => setVisible(false);
  const handleModalConfirm = () => {
    alert('저장');
  };

  const getTagList = async () => {
    try {
      const res = await axios({
        url: 'tag/list', // 통신할 웹문서
        method: 'get', // 통신할 방식
      });
      return res;
    } catch (err) {
      return console.log(err);
    }
  };
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

  useEffect(() => {
    getTagList();
    // getCategoryList()
  }, []);
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
}

export default LinkForm;
