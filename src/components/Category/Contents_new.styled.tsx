import styled from 'styled-components';

export const ContentsContainer = styled.div`
	width: 100%;
	height: 100vh;

	.contents-header {
		width: 100%;
		padding: 130px 50px 0 50px;
		display: flex;
		justify-content: space-between;

		.category-name {
			border: none;
			font-size: 18px;
			font-weight: 900;
		}

		.icons {
			font-size: 18px;
			cursor: pointer;
		}
		.icons .delete {
			margin-left: 10px;
		}
	}
`;
