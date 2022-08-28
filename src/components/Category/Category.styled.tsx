import styled from 'styled-components';

export const Container = styled.nav`  
  position: fixed;
  left: 0;
  top: 0;  

  width: 30%;  
  max-width: 330px;
  height: 100vh;
  background-color: #F6BC4B;
  

  .bookmark{
    width: 330px;
    font-size: 50px;
    color: #fff;
    padding-top: 250px; 
    text-align: center;   
  };

  .ul{
    padding: 30px 80px;
  }
  .list {
    list-style: none;
    font-weight: bold;
    color: #444444;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;      
  };
`;

export const PinIconWrapper = styled.div`
  display: inline-block;
  padding: 5px;
`;

export const ContentsContainer = styled.div`
  position: absolute;  
  top: 0px;
  left: 330px;
  
  width: 70%;
  // 영역 크기 안잡힘
  height: 100vh;
  
  .title{
    width: 100%;
    
    padding: 150px 0 0 80px;
    display: flex;
    justify-content: space-between;

    h2{
      font-size: 28px;
      font-weight: 900;
    };
    
    .icons{
      font-size: 30px;
      cursor: pointer;
    }
    .icons .delete{
      margin-left: 10px;
    }
    
  }
  
  
`;

