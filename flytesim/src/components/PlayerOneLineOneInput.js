import React, {useState, useEffect, Fragment} from "react";
import styled from "styled-components";

const PlayerOneLineOneInput = ({playerOneStarterWord, playerOneLineOne, setPlayerOneLineOne, handlePlayerOneLineOneSubmit}) => {

    const handlePlayerOneChange = (event) => {
        setPlayerOneLineOne(event.target.value)
    }

    return(
        <>
        <Lineonestyle>
        <form onSubmit={handlePlayerOneLineOneSubmit}>
        <input type="text" placeholder="Your line" name="name" value={playerOneLineOne} onChange={handlePlayerOneChange}/>
        <input type="text" value={playerOneStarterWord.word} id="unselectable"></input>
        <button type="submit">Save</button>
        </form>
        </Lineonestyle>
        </>
    )
}

export default PlayerOneLineOneInput;

const Lineonestyle = styled.div`
    `
