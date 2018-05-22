// import React from 'react';
import styled from 'styled-components';
import cuisineBanner from '../../assets/images/popular_cuisine_banner.png';

const Wrapper = styled.div`
  font-size: 1rem;
  position: relative;

  .top-recipes-container {
    padding-left: 5.5em;
    display: flex;
    flex-direction: column;
    margin-bottom: 5em;
    
    h1 {
      font-family: DomaineDispNar-Bold;
      letter-spacing: 2.1px;
      margin-top: 5.5em;
      font-size: 1em;
    }

    .list-top-recipes {
      display: flex;
      flex-direction: row;
      transition: hover 4s;

      .main-course {
        display: flex;
        flex: 1;
        flex-direction: column;
        list-style: none;

        .main-course-selector { 
          display:none;
          width: 35%;
          font-family: Gotham-Book-Medium;
          font-size: 0.8em;
          margin-bottom: 2em;
          border-color: #bd7133;
          border-radius: 0.5em;
          padding: 0.4em 0.7em;
        }
        li {
          padding: 0.5em 0;
          transition: all 0.3s;
          font-size: 0.9em;
          margin-right: 1em;

          :hover {
            cursor: pointer;
            background-color: rgba(226, 226, 226, 0.6)
          }
        }

        span {
          display: none;
        }

        li.selected {
          font-size: 1em;
          font-family: Gotham-Book-Bold;
          background-color: rgba(226, 226, 226, 0.6)
        }

        .selected span {
          display: inline;
          color: #bd7133;
          margin-right: 0.5em;
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
            width: 5.5em;
          }
        }
      }

      .footer-top-recipes_right {
        display: flex;
        flex: 4;

        button {
          background-color: white;
          border: solid 1px #cccccc;
          margin-right: 0.5em;
          color: #cccccc;
          width: 1.6em;
          height: 1.94em;
        }
      }
    }
  }
  
  .popular-cuisine-container {
    box-sizing: border-box;
    width: 100%;
    background-image: url(${cuisineBanner});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 4em 6em 4em 0;

    .box-cuisine {
      box-sizing: border-box;
      background-color: white;
      width: 25.72em;
      height: 25.72em;
      padding: 2.7em 2.2em 4.16em 2.5em;
      display: flex;
      flex-direction: column;

      .box-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        label {
          font-size: 0.8em;
          letter-spacing: 1.8px;
          font-family: Gotham-Book-Medium;
        }

        button {
          background-color: white;
          border: solid 1px #cccccc;
          margin-right: 0.5em;
          color: #cccccc;
          height: 1.94em;
          width: 1.6em;
        }
      }

      > label {
        font-family: DomaineDispNar-Bold;
        font-size: 2em;
        letter-spacing: 0.117em;
        color: #bd7133;
        margin-top: 0.5em;
      }

      p {
        max-height: 6.8em;
        font-family: Gotham-Book;
        font-size: 0.8em;
        line-height: 1.8em;
        letter-spacing: 0.8px;
        overflow: hidden;
        text-align: justify;
        position: relative;

        :before {
          content: '....';
          position: absolute;
          right: 0;
          bottom: 0;
          background: white;
        }
      }

      .see-more {
        display: flex;
        flex: 1;
        flex-direction: column;
        font-family: DomaineDispNar-Bold;
        font-style: italic;
        align-items: flex-end;
        padding-right: 1.38em;
        justify-content: flex-end;

        div {
          border-top: solid #bd7133 2px;
          width: 2.2em;
        }
      }
    }

    .list-image-cuisine {
      position: absolute;
      bottom: 9.16;
      right: 13.3em;

      img {
        width: 13.3em;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .top-recipes-container {
      .list-top-recipes {
        display: flex;
        flex-direction: column;

        .main-course > li { display: none; }
        .main-course .main-course-selector { display: block; };
      }
    }
    
  }
`;

export default Wrapper;