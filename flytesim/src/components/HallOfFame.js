import React, {useState} from "react";
import PreviousRap from "./PreviousRap";
import styled from "styled-components";

const HallOfFame = ({players, index}) => {

    const [player, setPlayer] = useState(null)
    const [playerIndexValue, setPlayerIndexValue] = useState(null)

    const handleSelectPlayer = (e) => {
            e.preventDefault()
            const selectedPlayer = players[playerIndexValue]
            setPlayer(selectedPlayer)
        }

    const handleChange = (event) => {
            setPlayerIndexValue(event.target.value)
        }

    const playerOptions = players.map((player, index) => {
            return <option key={index} value={index} raps={player.previousRaps}>{`${player.stageName} (${player.name})`}</option>
        })
    

    
		return(
            <>
            <h3>Select Player</h3>
        <form>
        <select value={players.stageName} onChange={handleChange}>
        <option disabled selected>Choose...</option>
        {playerOptions}
        </select>
        <button onClick={handleSelectPlayer}> Go</button>
        </form>
        <RapsBubble>
			<div key={index} className="component-item">
					{player && <PreviousRap raps={player.previousRaps} name={player.stageName} index={index}/>}
			</div>
            </RapsBubble>
            </>
		)
	}





export default HallOfFame;

const RapsBubble = styled.div`
font-weight: bold;
  flex: 1;
  flex-direction: row;
  width: 250px;
  height: 275px;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  left: 0;
  box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, inset 0px 13px 0px 0px rgba(0,124,255,0);`
