// import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 1rem;
  max-width: 14.5em;
  margin-right: 2.3em;
  position: relative;
  height: 21.1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  .img-card {
    position: relative;  
    box-sizing: border-box;      

    :hover .ingredients{
      opacity: 1;

    }

    .food-img {
      width: 14.5em;
      height: 14em;
    }
    
    .ingredients {
      position: absolute;
      background-color: rgba(164, 125, 94, 0.8);
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.5s;
      padding: 2.7em 1.6em;
      box-sizing: border-box;
      
      
      li {
        list-style: none;
        color: white;
        font-size: 0.6em;
        line-height: 1.83;
        letter-spacing: 1.5px;

        span {
          font-family: Gotham-Book-Bold;
        }
      }

      .see-detail {
        position: absolute;
        bottom: 1.94em;

        label {
          font-family: DomaineDispNar;
          font-style: italic;
          font-size: 0.7em;
          line-height: 1.5;
          color: white;
          top: 1.1em;

          :hover {
            cursor: pointer;
            color: #d8d6d6;
          }
        }

        div {
          width: 1.6em;
          border-top: solid white 2px;
          transition: all 0.5s ease-out;
        }

        :hover div {
          width: 4.4em
        }
      }
      

      
    }

    
  }  

  .food-name-short {
    font-family: DomaineDispNar-Bold;
    font-size: 1.125em
    letter-spacing: 1.1px;
    line-height: 1.5;
    overflow:hidden;
  }

  .food-name-long {
    font-family: DomaineDispNar-Bold;
    font-size: 1.125em
    letter-spacing: 1.1px;
    line-height: 1.5;
    text-align: justify;
    overflow: hidden;
    position: relative;

    :before {
      content: '...';
      position: absolute;
      right: 0;
      bottom: 0;
      background: white;
    }
  }

  .food-category {
    font-family: Gotham-Book-Medium;
    font-style: italic;
    color: #bd7133;
    font-size: 0.875em;
    letter-spacing: 0.9px;
  }

`;

export default Wrapper;