import styled from "styled-components";
import PoetryBattle from "./img/PoetryBattle.jpg";
import React from 'react';


const NavBar = (props) => {
  return (
    <Nav>
        <img className="poetrybattle" src={PoetryBattle} alt="Poetry Battle" />
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
  justify-content: space-between;
  align-items: center;
  background-color: #019DE0;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  
  .poetrybattle {
    width: 125px;
    height: 100px;
    margin: 10px 500px 10px 10px;
  }`;
