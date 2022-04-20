import React from "react";
import PlayerForm from "./PlayerForm";

const PreviousRap = ({raps, name, index}) => {
    console.log(raps)

    const drillDownRaps = raps.map((rap, score) => (rap.rap))
    console.log(drillDownRaps)
    const getRaps = drillDownRaps.map((rap, index) => {
        return <p key={index} value={index} rap={rap}>{rap}</p>
    })

    return(
        <>
        {getRaps}        
        </>
    )
}

export default PreviousRap;