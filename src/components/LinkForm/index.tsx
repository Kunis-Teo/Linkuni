import React from "react";
/* eslint-disable */
import UrlFormContent from "@/components/Form/UrlFormContent";

// props: linkData from linkCard
function LinkForm({ linkData, visible, setVisible }) {
  const handleModalOpen = () => setVisible(true);
  const handleModalClose = () => setVisible(false);
  const handleModalConfirm = () => {};

  return (
    <>
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
