import React, {useState, useEffect, Fragment} from "react";
import { dictionary } from 'cmu-pronouncing-dictionary'
import styled from "styled-components"

const CalculateScore = ({soloLineOne, soloLineTwo}) => {

    let vowels = []
    let consonants = []

    let fullLineString = `${soloLineOne} ${soloLineTwo}`
    let fullLineArray = fullLineString.split(" ")
    let newArray = []
    for (let i = 0; i < fullLineArray.length; i++) {
        newArray.push(dictionary[fullLineArray[i]])
      }
    var filteredArray = newArray.filter(function(x) {
        return x !== undefined;
    });
    let noDigitsArray = []
    for (let i = 0; i < filteredArray.length; i++) {
    noDigitsArray.push(filteredArray[i].replace(/[0-9]/g, ''))
    }
    let uniqueArray = noDigitsArray.filter((element, index) => {
    return noDigitsArray.indexOf(element) === index;
    })
    console.log(uniqueArray)
    let dupChars = noDigitsArray.filter((element, index) => {
    return noDigitsArray.indexOf(element) !== index;
    });
    console.log(dupChars)
    let uniqueChars = dupChars.filter((element, index) => {
    return dupChars.indexOf(element) === index;
    });
    console.log(uniqueChars);
    let finalArray = uniqueArray.concat(uniqueChars)
    console.log(finalArray)


   


    return(
        <PlayerRap>
        {fullLineString}
        </PlayerRap>
    )

}

export default CalculateScore;

const PlayerRap = styled.div`
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: black;
    text-align: left;
    left: 10px;
    margin-top: 4%;
    margin-left: 25%;
    padding: 10px;
    width: 50%;
    background-color: white;
    border-radius: 20px 20px 20px 0px;`