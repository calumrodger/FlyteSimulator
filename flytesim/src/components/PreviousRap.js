import React from "react";

const PreviousRap = ({raps, name, index}) => {
    console.log(raps)

    const getRaps = raps.map((rap, index) => {
        return <p key={index} value={index} rap={raps.rap}>{rap}</p>
    })
    return(
        <>
        {getRaps}
        </>
    )
}

export default PreviousRap;