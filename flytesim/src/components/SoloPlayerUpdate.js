import React from 'react';

const SoloPlayerUpdate = ({handleRapPost, score, soloPlayer, setSoloPlayer, soloLineOne, soloLineTwo, onUpdate}) => {

    const handleDatabaseSubmit = (event) => {
        event.preventDefault();
        console.log(soloPlayer.previousRaps)
        let fullLineString = `${soloLineOne} ${soloLineTwo}`
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

        setSoloPlayer(updatedPlayer)
        onUpdate(soloPlayer);
    }

    return(
        
        <>
        <button className="database-button" type="submit" onClick={handleDatabaseSubmit}>Save to Database</button>
        </>
    )

}

export default SoloPlayerUpdate;