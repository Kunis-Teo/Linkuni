import { useState } from "react";
import Portal from "@/components/common/Portal";
import {
  StyledMask,
  StyledModalWrapper,
} from "@/components/Modal/Modal.styled";

type TProps = {
  id?: string;
  onConfirm: () => void;
  onClose: () => void;
  children?: React.ReactNode;
};

const Modal = ({ id, onConfirm, onClose, children }: TProps) => {
  const [close, setClose] = useState(false);
  console.log("local CLose", close);

  const handleModalClose = () => {
    setClose(true);
  };

  const handleAnimationEnd = () => {
    if (close) {
      onClose();
    }
  };

  return (
    <Portal id={id}>
      <StyledMask close={close} onAnimationEnd={handleAnimationEnd}>
        <StyledModalWrapper close={close}>
          <div className="modal-content">
            <div className="modal-body">{children}</div>
          </div>
        </StyledModalWrapper>
      </StyledMask>
    </Portal>
  );
};

export default Modal;
