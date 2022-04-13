import React, {useState, useEffect, Fragment} from "react";
import { dictionary } from 'cmu-pronouncing-dictionary'
import styled from "styled-components"

const SoloCalculateScore = ({soloLineOne, soloLineTwo, setSoloAlliterationBonus, setSoloAssonanceBonus, setSoloFinalScore, soloStarterWord, soloRhymeWordValue}) => {

    let fullLineString = `${soloLineOne} ${soloLineTwo}`
    let fullLineArray = fullLineString.split(" ")

    let phoneticArray = []
    for (let i = 0; i < fullLineArray.length; i++) {
        phoneticArray.push(dictionary[fullLineArray[i]])
      }

    var filteredForUndefinedsArray = phoneticArray.filter(function(x) {
        return x !== undefined;
    });

    let noDigitsArray = []
    for (let i = 0; i < filteredForUndefinedsArray.length; i++) {
    noDigitsArray.push(filteredForUndefinedsArray[i].replace(/[0-9]/g, ''))
    }

    let uniqueArray = noDigitsArray.filter((element, index) => {
    return noDigitsArray.indexOf(element) === index;
    })

    let duplicateSounds = noDigitsArray.filter((element, index) => {
    return noDigitsArray.indexOf(element) !== index;
    });

    let uniqueChars = duplicateSounds.filter((element, index) => {
    return duplicateSounds.indexOf(element) === index;
    });
    
    console.log(uniqueChars);
    let finalArray = uniqueArray.concat(uniqueChars)
    console.log(finalArray)

    let arrayOfArrays = []
    for (let i = 0; i < finalArray.length; i++) {
        let miniArray = (finalArray[i].split(" "))
        arrayOfArrays.push(miniArray)
      }
    console.log(arrayOfArrays)

    let alliterationArray = [];

    for (let i = 0; i < arrayOfArrays.length; i++) {
        alliterationArray.push(arrayOfArrays[i][0])
    }
    console.log(alliterationArray);

    let checkUniqueAlliterations = alliterationArray.filter((element, index) => {
        return alliterationArray.indexOf(element) === index;
        })
        console.log(checkUniqueAlliterations)

    let alliterationScore = (alliterationArray.length - checkUniqueAlliterations.length)
    console.log(alliterationScore)

    let vowels = ["AA", "AE", "AH", "AO", "AW", "AX", "AXR", "AY", "EH", "ER", "EY", "IH", "IX", "IY", "OW", "OY", "UH", "UW", "UX"]

    var merged = [].concat.apply([], arrayOfArrays);
    console.log(merged)
    const vowelArray = merged.filter(element => vowels.includes(element));
    console.log(vowelArray)

    let assonanceArray = vowelArray.filter((element, index) => {
        return vowelArray.indexOf(element) !== index;
        });
    console.log(assonanceArray)

    let assonanceScore = assonanceArray.length
    console.log(assonanceScore)
    setSoloAlliterationBonus(alliterationScore)
    setSoloAssonanceBonus(assonanceScore)
    let finalScore = (soloStarterWord.value + soloRhymeWordValue + alliterationScore + assonanceScore)
    setSoloFinalScore(finalScore)

    return(
        <PlayerRap>
        {fullLineString}
        </PlayerRap>
    )

}

export default SoloCalculateScore;

const PlayerRap = styled.div`
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: black;
    text-align: left;
    left: 10px;
    margin-top: 10%;
    margin-left: 25%;
    padding: 10px;
    width: 50%;
    background-color: white;
    border-radius: 20px 20px 20px 0px;`