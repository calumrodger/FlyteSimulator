import styled from "styled-components";
import PoetryBattle from "./img/PoetryBattle.jpg";
import React from 'react';


const NavBar = (props) => {
  return (
    <Nav>
        <img className="poetrybattle" src={PoetryBattle} alt="Poetry Battle" />
      <ULStyle>
      <ul>one</ul>
      <ul>two</ul>
      <ul>three</ul>
      </ULStyle>
      </Nav>
  )
}

export default NavBar;

const Nav = styled.div`
  display: flex;
  align-items: center;
  background-color: #019DE0;

  
  .poetrybattle {
    width: 125px;
    height: 100px;
    margin: 10px 500px 10px 10px;
  }`;

  const ULStyle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-shadow: 2px 2px pink;
  color: white;
  font-size: 25px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  margin-top: 2%;
  margin-left: 25%;  `
