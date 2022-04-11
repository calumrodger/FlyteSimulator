import React, {useState, useEffect, Fragment} from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const SoloPlayerUpdate = ({soloPlayer, onUpdate}) => {

    const [statePlayer, setStatePlayer] = useState({
    name: "",
    stageName: "",
    points: 0,
    previousRaps: null
    })

    const handleDatabaseSubmit = (event) => {
        event.preventDefault();
        onUpdate(statePlayer);
    }

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedPlayer = {...statePlayer};
        copiedPlayer[propertyName] = event.target.value;
        setStatePlayer(copiedPlayer);
        console.log(statePlayer)
    }

    return(
        
        <>
        <h3>SAVE TO DATABASE</h3>
        <button type="submit" onClick={handleDatabaseSubmit}>Save</button>
        </>
    )

}

export default SoloPlayerUpdate;