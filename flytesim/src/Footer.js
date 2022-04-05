import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Foot>
      <marquee width="100%" direction="left" height="75px">
        <p>Past scores go here...</p>
      </marquee>
    </Foot>
  );
}

export default Footer;

const Foot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  left: 0;
  bottom: 0%;
  width: 100%;
  background-color: #109465;
  color: yellow;
  text-shadow: 2px 2px 4px yellow;
  font-size: 20px;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
`;
