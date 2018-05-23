// import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`

  box-sizing: border-box;
  font-size: 1rem;
  display: flex;
  justify-content:space-between;
  align-items: center;
  z-index: 1;
  padding: 1.38em 6.25em;
  position: sticky;
  top: 0;
  background: linear-gradient(white, transparent);
  transition: all 0.5s;

  a {
    text-decoration: none;
    color: black;
    font-size: 1em;

    :hover {
      color: grey;
    }
  }

  .burger-icon {
    display: none;
    
    svg {
      height: 1.5em;
      width: 1.5em;
    }
  }
  
  .navbar-left {
    display: flex;
    align-items: center;
    
    .logo-icon {
      border: black solid 2px;
      padding: 2px;
      cursor: pointer;
      margin-right: 5.5em;
    }

    a {
      margin-right: 2.7em;
    }
  }

  .navbar-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a, svg {
      margin-left: 1.1em;
      cursor: pointer;
    }

    .register {
      color: #bd7133;
      border: solid #bd7133 1px;
      border-radius: 0.1em;
      padding: 0.4em 1em;
      font-family: DomaineDispNar;
      font-weight: bold;
      letter-spacing: 1.2px;

      :hover {
        background-color: rgba(226, 226, 226, 0.5);
      }
    }
  }

  @media only screen and (max-width: 768px){
    display: flex;
    justify-content:space-between;
    padding: 1.38em 3.125em;

    .burger-icon { display: flex }
    .navbar-left > .logo-icon { margin-right: 0px; color: red }

    .navbar-left > a { 
      display: none;
    }
    
    .navbar-right > a {
      display: none;
    }

  }
`;

export default Wrapper;