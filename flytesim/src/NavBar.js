import styled from "styled-components";
import React from 'react';


const NavBar = (props) => {
  return (
    <Nav>
        <img src="/img/PoetryBattle.jpg" alt="Poetry Battle" />
      <p>one</p>
      <p>two</p>
      <p>three</p>
    </Nav>
  )
}

export default NavBar;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #E0AE16;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  
  .poetrybattle {
    width: 100px;
    height: 10px;
  }`;
