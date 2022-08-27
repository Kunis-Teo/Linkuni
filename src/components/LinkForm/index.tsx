import React, { useState } from "react";
import Button from "@/components/common/Button";
import Modal from "@/components/Modal/index";
import { FaPlus, FaPen } from "react-icons/fa";
import UrlFormContent from "../Form/UrlFormContent";

// props: linkData from linkCard
const LinkForm = ({ linkData }) => {
  const [visible, setVisible] = useState(false);
  const handleModalOpen = () => setVisible(true);
  const handleModalClose = () => setVisible(false);
  const handleModalConfirm = () => {
    // created: post
    // edited
    alert("updated!");
  };
  return (
    <>
      <Button color="purple" onClick={handleModalOpen}>
        {linkData ? <FaPen /> : <FaPlus />}
      </Button>
      {visible && (
        <Modal onConfirm={handleModalConfirm} onClose={handleModalClose}>
          <UrlFormContent
            linkData={linkData}
            onConfirm={handleModalConfirm}
            onClose={handleModalClose}
          />
        </Modal>
      )}
    </>
  );
};

export default LinkForm;
