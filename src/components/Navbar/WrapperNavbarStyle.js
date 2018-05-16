// import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  z-index: 1;
  box-sizing: border-box;
  display: flex;
  padding: 25px 100px 25px 100px;
  position: sticky;
  top: 0;
  background: linear-gradient(white, transparent);
  font-size: 1em;
  transition: all 0.5s;

  a {
    text-decoration: none;
    color: black;

    :hover {
      color: grey;
    }
  }

  .logo-icon {
    border: black solid 2px;
    padding: 2px;
    cursor: pointer;
  }

  .navbar-left {
    display: flex;
    align-items: center;
    
    a {
      margin-right: 50px;

      :first-child {
        margin-left: 100px;
      }
    }
  }

  .navbar-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a, svg {
      margin-left: 20px;
      cursor: pointer;
    }

    .register {
      color: #bd7133;
      border: solid #bd7133 1px;
      border-radius: 2px;
      padding: 8px 19px;
      font-family: DomaineDispNar;
      font-weight: bold;
      letter-spacing: 1.2px;

      :hover {
        background-color: rgba(226, 226, 226, 0.5);
      }
    }
  }

`;

export default Wrapper;