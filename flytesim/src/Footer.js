import React from "react";
import styled from "styled-components";
import GameContainer from "./containers/GameContainer";

function Footer({players}) {
  console.log(players)

  const drillDownPlayers = players.map((player) => (player.stageName))
    console.log(drillDownPlayers)

  const drillDownScores = players.map((player) => (player.points))
  console.log(drillDownScores)

  const playersAndScores = players.map((player, index) => {
    return <>{` ${player.stageName}: ${player.points} ...`}</>
})

  return (
    <Foot>
      <marquee width="100%" direction="left" height="75px">
        <p>ALL-TIME HIGH SCORES: {playersAndScores}</p>
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
