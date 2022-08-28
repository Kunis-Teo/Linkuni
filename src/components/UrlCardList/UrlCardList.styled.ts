import styled from 'styled-components';

export const StyledWrapper = styled.section`
  width: 100%;
  padding: 20px;

  .section-title {
    font-size: 24px;
    font-weight: 600;
    padding: 20px 0;
  }
  .card-list-wrapper {
    padding: 0;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;

    width: 100%;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
    & > :not(:last-child) {
      margin-right: 10px;
    }
  }
`;
