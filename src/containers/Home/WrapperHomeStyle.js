// import React from 'react';
import styled from 'styled-components';
import cuisineBanner from '../../assets/images/popular_cuisine_banner.png';

const Wrapper = styled.div`
  position: relative;
  transition: all 4s;

  .top-recipes-container {
    padding-left: 100px;
    display: flex;
    flex-direction: column;
    margin-bottom: 90px;
    
    h1 {
      font-family: DomaineDispNar-Bold;
      letter-spacing: 2.1px;
      margin-top: 100px;
    }

    .list-top-recipes {
      display: flex;
      flex-direction: row;

      .main-course {
        display: flex;
        flex: 1;
        flex-direction: column;
        list-style: none;

        li {
          padding: 10px 0;
          transition: all 0.3s;

          :hover {
            cursor: pointer;
            background-color: rgba(226, 226, 226, 0.6)
          }
        }

        span {
          display: none;
        }

        li.selected {
          font-size: 16px;
          font-family: Gotham-Book-Bold;
        }

        .selected span {
          display: inline;
          color: #bd7133;
          margin-right: 10px;
        }
      }

      .sample-course {
        display: flex;
        flex: 4;
        flex-direction: row;
        overflow: scroll;
        
      }
    }

    .footer-top-recipes {
      display: flex;
      flex-direction: row;
      align-items: center;

      .footer-top-recipes_left {
        display: flex;
        flex: 1;
        flex-direction: column;
        font-family: DomaineDispNar-Bold;
        font-style: italic;

        div {
          border-top: solid #bd7133 2px;
          width: 40px;
          transition: width 0.5s ease-out;
        }
        >label:hover{
          cursor: pointer;
        }
        :hover {
          color: grey;
          cursor: pointer;

          div {
            width: 100px;
          }
        }
      }

      .footer-top-recipes_right {
        display: flex;
        flex: 4;

        button {
          background-color: white;
          border: solid 1px #cccccc;
          margin-right: 10px;
          color: #cccccc;
          width: 30px;
          height: 35px;
        }
      }
    }
  }
  
  .popular-cuisine-container {
    height: 600px;
    background-image: url(${cuisineBanner});
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 69px 100px 0 0;

    .box-cuisine {
      box-sizing: border-box;
      background-color: white;
      max-width: 463px;
      height: 463px;
      padding: 50px 40px 75px 45px;
      display: flex;
      flex-direction: column;

      .box-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        label {
          font-size: 14px;
          letter-spacing: 1.8px;
        }

        button {
          background-color: white;
          border: solid 1px #cccccc;
          margin-right: 10px;
          color: #cccccc;
          height: 35px;
          width: 30px;
        }
      }

      > label {
        font-family: DomaineDispNar-Bold;
        font-size: 36px;
        letter-spacing: 2.1px;
        color: #bd7133;
        margin-top: 10px;
      }

      p {
        height: 102px;
        font-family: Gotham-Book;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.8px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .see-more {
        display: flex;
        flex: 1;
        flex-direction: column;
        font-family: DomaineDispNar-Bold;
        font-style: italic;
        align-items: flex-end;
        padding-right: 25px;
        justify-content: flex-end;

        div {
          border-top: solid #bd7133 2px;
          width: 40px;
        }
      }
    }

    .list-image-cuisine {
      position: absolute;
      bottom: 165px;
      right: 240px;

      img {
        width: 240px;
      }
    }
  }

`;

export default Wrapper;