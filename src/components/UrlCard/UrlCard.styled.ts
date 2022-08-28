import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  ${({ isWatched }: { isWatched: boolean }) => {
    return (
      isWatched &&
      css`
        opacity: 0.5;
      `
    );
  }}

  width: 210px;
  height: 180px;
  border: 1px solid #d4d4d4;
  border-radius: 16px;
  position: relative;
  cursor: pointer;
  .card-header {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #d4d4d4;
  }

  .header-image {
    border-radius: 16px 16px 0 0;
    width: 100%;
    height: 100px;
  }

  .card-body {
    width: 100%;
    padding: 10px;
  }

  .body-title {
    font-size: 14px;
    font-weight: 900;
    padding-bottom: 6px;
  }

  .body-tag {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
    color: gray;
  }

  .card-footer {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #d4d4d4;

    .footer-icon-wrapper {
      display: flex;

      & > :not(:last-child) {
        margin-right: 6px;
      }
    }
  }

  .footer-url {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
    color: gray;
  }
`;
