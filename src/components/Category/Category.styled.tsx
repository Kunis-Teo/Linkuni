import styled  from 'styled-components';

export const StyledWrapper = styled.div`
  position: absolute;
  left: 0;

  display: flex;
  justify-content: center;

  width: 30%;
  height: 100vh;

  background-color: #F6BC4B;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  transform: ${(props) =>
    props.open ? "translateX(0px)" : "translateX(-130px)"};
  
  transition: transform 0.2s linear;

  .ul {
    margin-top: 160px;
    font-weight: 900;    
  };

  .list{
    font-size: 12px;
    margin-bottom: 8px;
  };

  .bookmark-button {
    position: absolute;
    top: 140px;
    left: 100%;

    width: 35px;
    height: 70px;
    
    border-radius: 0 10px 10px 0;
    border: 0;
    
    background-color: #F6BC4B;
    text-align: center;
    line-height: 80px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  };

  .bookmark-button .mobile-bookmark {
    color: white;
    font-size: 18px;
  }
`;
