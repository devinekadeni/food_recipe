import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 262px;
  border: 0.1px solid #e2e2e2;

  .img-card {
    position: relative;  
    box-sizing: border-box;      

    :hover .ingredients{
      opacity: 1;

    }

    .food-img {
      max-width: 262px;
    }
    
    .ingredients {
      position: absolute;
      background-color: rgba(164, 125, 94, 0.8);
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.5s;
      padding: 50px 30px;
      box-sizing: border-box;
      
      
      li {
        list-style: none;
        color: white;
        font-size: 12px;
        line-height: 1.83;
        letter-spacing: 1.5px;

        span {
          font-family: Gotham-Book-Bold;
        }
      }

      .see-detail {
        position: absolute;
        bottom: 35px;

        label {
          font-family: DomaineDispNar;
          font-style: italic;
          font-size: 14px;
          line-height: 1.5;
          color: white;
          top: 20px;

          :hover {
            cursor: pointer;
          }
        }

        div {
          width: 30px;
          border-top: solid white 2px;
        }
      }
      

      
    }

    
  }  

  .food-name {
    font-family: DomaineDispNar-Bold;
    font-size: 18px
    letter-spacing: 1.1px;
  }

  .food-category {
    font-family: Gotham-Book-Medium;
    font-style: italic;
    color: #bd7133;
    font-size: 14px;
    letter-spacing: 0.9px;
  }

`;

export default Wrapper;