
import GameContainer from './containers/GameContainer';
import Footer from './Footer';
import "./index.css";
import "./App.css";
import NavBar from "./NavBar";
import RubberCapstone from "./img/rubbercapstone.png";
import PencilCapstone from "./img/pencilcapstone.png";
import styled from "styled-components";
import ParticlesBg from 'particles-bg'
import flytesim from "./img/flytesim.png";


import React, { useLayoutEffect, useState } from 'react';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function ShowWindowDimensions(props) {
  const [width, height] = useWindowSize();
  return <span>Window size: {width} x {height}</span>;
}

function App() {
  return (
    
    <div className="App">
      <NavBar />

      <ParticlesBg type="circle" bg={true}/>

      <h2 className="retro"></h2>
      <img className="logo" src={flytesim} alt="flytesim" />
    <GameContainer />
      <Sprites>
        <img
          className="pencilcharacter bounce-1"
          src={PencilCapstone}
          alt="Pencil Character"
        />
        <img
          className="rubbercharacter bounce-1"
          src={RubberCapstone}
          alt="Rubber Character"
        />
      </Sprites>



    </div>
  );
}

export default App;

const Sprites = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 0px;


  img{
    width: 400px;
    height: 400px;
    padding: 0px 10px 0px 10px;
    z-index: -1;

  }
  `

