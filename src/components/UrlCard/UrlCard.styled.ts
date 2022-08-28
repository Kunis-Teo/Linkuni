import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 410px;
  height: 380px;
  border: 1px solid #d4d4d4;
  border-radius: 16px;
  position: relative;

  .card-header {
    width: 100%;
    height: 230px;
    border-bottom: 1px solid #d4d4d4;
  }

  .header-image {
  }

  .card-body {
    width: 100%;
    height: 100px;
    padding: 10px;
  }

  .body-title {
    font-size: 24px;
    font-weight: 900;
    padding-bottom: 10px;
  }

  .body-tag {
    font-size: 20px;
    color: gray;
  }

  .card-footer {
    width: 100%;
    height: 50px;
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
        margin-right: 12px;
      }
    }
  }

  .footer-url {
    color: gray;
  }
`;
