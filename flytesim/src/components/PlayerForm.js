import React, {useState, useEffect, Fragment} from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const PlayerForm = ({player, onCreate}) => {

    const [statePlayer, setStatePlayer] = useState({
    name: "",
    stageName: "",
    points: 0,
    previousRaps: []
    })

    useEffect(() => {
        if(player){
            let copiedPlayer = {...player}
            setStatePlayer(copiedPlayer);
        }
    }, [player])



    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(statePlayer);
        window.location.reload()
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
        <h3>Create Player</h3>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" onChange={handleChange} value={statePlayer.name}/>
        <input type="text" placeholder="Stage name" name="stageName" onChange={handleChange} value={statePlayer.stageName}/>
        <button type="submit">Save</button>
        </form>
        </>
    )
}

export default PlayerForm;