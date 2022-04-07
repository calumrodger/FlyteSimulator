
import GameContainer from './containers/GameContainer';
import Footer from './Footer';
import "./App.css";
import NavBar from "./NavBar";
import RubberCapstone from "./img/rubbercapstone.png";
import PencilCapstone from "./img/pencilcapstone.png";
import styled from "styled-components";
import ParticlesBg from 'particles-bg'
import flytesim from "./img/flytesim.png";



function App() {
  return (
    <div className="App">
      <NavBar />

      <ParticlesBg type="circle" bg={true}/>

      <h2> </h2>
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
<Footer />

    </div>
  );
}

export default App;

const Sprites = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  padding: 0px;
  img{
    width: 400px;
    height: 400px;
    padding: 0px 10px 0px 10px;
    background-attachment: fixed;
  }
  `

