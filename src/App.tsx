import { useState } from "react";
import Button from "@/components/common/Button";
import Modal from "@/components/Modal/index";


function App() {
    const [visible, setVisible] = useState(false);
    const handleModalOpen = () => setVisible(true);
    const handleModalClose = () => setVisible(false);
    const handleModalConfirm = () => {
        // ...submit logic
        alert("삭제되었습니다!");
    };
  return (
    <div>
      <div style={{ margin: "100px" }}>
        <Button color="lightpink" onClick={handleModalOpen}>
          모달을 열자 제발
        </Button>

        {visible && (
            <Modal
                title="데이터 삭제"
                onConfirm={handleModalConfirm}
                onClose={handleModalClose}
            >
              삭제하면 되돌릴 수 없습니다.
              <br /> 정말로 삭제하겠습니까?
            </Modal>
        )}
      </div>
    </div>
  );
}

export default App;
