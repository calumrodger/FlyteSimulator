import React, {useState} from "react";
import PreviousRap from "./PreviousRap";

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
			<div key={index} className="component-item">
					{player && <PreviousRap raps={player.previousRaps} name={player.name} index={index}/>}
			</div>
            </>
		)
	}





export default HallOfFame;
