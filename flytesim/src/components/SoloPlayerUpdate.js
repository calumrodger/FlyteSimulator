import React, {useState, useEffect, Fragment} from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const SoloPlayerUpdate = ({handleRapPost, score, soloPlayer, setSoloPlayer, soloLineOne, soloLineTwo, onUpdate}) => {

    // const [stateRap, setStateRap] = useState({
    //     rap: "",
    //     score: 0
    // })

    // useEffect(() => {
    //     if(soloPlayer){
    //         let copiedPlayer = {...soloPlayer}
    //         setStatePlayer(copiedPlayer);
    //     }
    // }, [soloPlayer])

    const handleDatabaseSubmit = (event) => {
        event.preventDefault();
        console.log(soloPlayer.previousRaps)
        let fullLineString = `${soloLineOne} ${soloLineTwo}`
        // setSoloPlayer(soloPlayer)
        let newRap = {
            rap: fullLineString,
            score: score,
            player: soloPlayer
        }
        console.log(newRap)
        handleRapPost(newRap)
        let updatedPlayer = {
        name: soloPlayer.name,
        stageName: soloPlayer.stageName,
        points: soloPlayer.points += score,
        previousRaps: [...soloPlayer.previousRaps, newRap]
        }
        // let copiedPlayer = {...soloPlayer}
        // let runningScore = soloPlayer.points
        // let newScore = runningScore += score
        // console.log(copiedPlayer)
        // copiedPlayer.points = newScore

        
        // let rapArray = [updatedPlayer.previousRaps]
        // rapArray.push(`${fullLineString}`)
        // console.log(rapArray)
        // updatedPlayer.previousRaps = rapArray

        setSoloPlayer(updatedPlayer)
        onUpdate(soloPlayer);
        // console.log(statePlayer)
    }

    return(
        
        <>
        <button type="submit" onClick={handleDatabaseSubmit}>Save to Database</button>
        </>
    )

}

export default SoloPlayerUpdate;