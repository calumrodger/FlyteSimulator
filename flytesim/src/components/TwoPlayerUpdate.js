import React from 'react';

const TwoPlayerUpdate = ({handleRapPost, scoreOne, scoreTwo, playerOne, playerTwo, setPlayerOne, setPlayerTwo, playerOneLineOne, playerOneLineTwo, playerTwoLineOne, playerTwoLineTwo, onUpdate}) => {

    const handleDatabaseSubmit = (event) => {
        event.preventDefault();
        console.log(playerOne.previousRaps)
        let fullLineStringOne = `${playerOneLineOne} ${playerOneLineTwo}`
        let newRapOne = {
            rap: fullLineStringOne,
            score: scoreOne,
            player: playerOne
        }
        console.log(newRapOne)
        handleRapPost(newRapOne)
        let updatedPlayerOne = {
        name: playerOne.name,
        stageName: playerOne.stageName,
        points: playerOne.points += scoreOne,
        previousRaps: [...playerOne.previousRaps, newRapOne]
        }
        setPlayerOne(updatedPlayerOne)
        onUpdate(playerOne);

        let fullLineStringTwo = `${playerTwoLineOne} ${playerTwoLineTwo}`
        let newRapTwo = {
            rap: fullLineStringTwo,
            score: scoreTwo,
            player: playerTwo
        }
        console.log(newRapTwo)
        handleRapPost(newRapTwo)
        let updatedPlayerTwo = {
        name: playerTwo.name,
        stageName: playerTwo.stageName,
        points: playerTwo.points += scoreTwo,
        previousRaps: [...playerTwo.previousRaps, newRapTwo]
        }
        setPlayerOne(updatedPlayerTwo)
        onUpdate(playerTwo);


    }

    return(
        
        <>
        <button className="database-button" type="submit" onClick={handleDatabaseSubmit}>Save to Database</button>
        </>
    )

}

export default TwoPlayerUpdate;