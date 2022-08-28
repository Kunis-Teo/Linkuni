import React from 'react';
import { ModalWrapper } from './Modal.styled';

function Modal() {
	return (
		<ModalWrapper>
			<div>
				<h3>수정하기</h3>
				<input />
				<button type="button">SAVE</button>
			</div>
		</ModalWrapper>
	);
}

export default Modal;
