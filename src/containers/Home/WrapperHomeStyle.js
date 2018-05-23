// import React from 'react';
import styled from 'styled-components';
import cuisineBanner from '../../assets/images/popular_cuisine_banner.png';

const Wrapper = styled.div`
  font-size: 1rem;
  position: relative;

  .top-recipes-container {
    padding-left: 6.25em;
    display: flex;
    flex-direction: column;
    margin-bottom: 5em;
    
    h1 {
      font-family: DomaineDispNar-Bold;
      letter-spacing: 2.1px;
      margin-top: 7.5rem;
      font-size: 2.25em;
      margin-bottom: 2.5rem;
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
          width: 50%;
          font-family: Gotham-Book-Medium;
          font-size: 1.2em;
          margin-bottom: 2em;
          border-color: #bd7133;
          border-radius: 0.5em;
          padding: 0.4em 0.7em;
        }
        li {
          padding: 0.5em 0;
          transition: all 0.3s;
          font-size: 1em;
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
        overflow-x: scroll;
        
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

        button:first-child {
          background-color: white;
          border: outset 1px #cccccc;
          margin-right: 0.7em;
          color: #cccccc;
          width: 1.8em;
          height: 2.2em;
          cursor: pointer;

          :hover {
            background-color: #ededed; 
          }

          :active {
            border: inset;
          }
        }

        button:last-child {
          background-color: white;
          border: solid 1px #cccccc;
          margin-right: 0.7em;
          color: #cccccc;
          width: 1.8em;
          height: 2.2em;
          cursor: pointer;

          :hover {
            background-color: #ededed; 
          }

          :active {
            transform: translateY(2px)
          }
        }
      }
    }
  }
  
  .popular-cuisine-container {
    box-sizing: border-box;
    width: 100%;
    min-height: 25em;
    background-image: url(${cuisineBanner});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 4em 6em 4em 0;
    position: relative;
    overflow: hidden;

    .box-cuisine-container {
      box-sizing: border-box;
      width: 25.72em;
      height: 25.72em;
      overflow: scroll;
      display: flex;
      flex-direction: row;

      .box-cuisine {
        box-sizing: border-box;
        padding: 2.7em 2.2em 4.16em 2.5em;
        min-width: 25.72em;
        height: 25.72em;
        background-color: white;
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
            margin-right: 1.875em;
          }
        }
      }
    }

    .list-image-cuisine {
      box-sizing: unset;
      position: absolute;
      bottom: 6em;
      right: 13.5em;
      width: 54em;
      height: 8em;
      display: flex;
      flex-direction: row;

      img {
        width: 12.3em;
        margin-right: 1em;

        :last-child {
          margin-right: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .popular-cuisine-container {
      .list-image-cuisine {
        box-sizing: border-box;
        width: 40em;
        overflow: scroll;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .top-recipes-container {
      padding-left: 3.125em;

      .list-top-recipes {
        display: flex;
        flex-direction: column;

        .main-course > li { display: none; }
        .main-course .main-course-selector { display: block; };
      }
    }
    
    .popular-cuisine-container {
      justify-content: center;
      padding: 4em 0;

      .box-cuisine {
        padding: 2.7em 2.2em 0 2.5em;
        height: 27em;

        .see-more {
          display: flex;
          flex: 1;
          flex-direction: column;
          font-family: DomaineDispNar-Bold;
          font-style: italic;
          align-items: flex-end;
          padding-right: 0;
          padding-bottom: 1em;
          justify-content: flex-end;
  
          div {
            border-top: solid #bd7133 2px;
            width: 2.2em;
          }
        }
      }

      .list-image-cuisine {
        bottom: 7em;
        right: unset;
        margin: auto;
        box-sizing: border-box;
        overflow: scroll;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .popular-cuisine-container {
      .list-image-cuisine {
        bottom: 7em;
        right: unset;
        margin: unset;
        width: 100%;
        box-sizing: border-box;
        overflow: scroll;
      }
    }
  }
`;

export default Wrapper;