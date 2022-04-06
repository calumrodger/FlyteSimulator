
import GameContainer from './containers/GameContainer';
import Footer from './Footer';
import "./App.css";
import NavBar from "./NavBar";
import RubberCapstone from "./img/rubbercapstone.png";
import PencilCapstone from "./img/pencilcapstone.png";
import styled from "styled-components";
import ParticlesBg from 'particles-bg'



function App() {
  return (
    <div className="App">
      <NavBar />
      <Backgroundsize>
      <ParticlesBg type="circle" bg={true}/>
      </Backgroundsize>
      <h2>Hello and welcome to...</h2>
      <h1>FLYTE SIMULATOR</h1>
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

  const Backgroundsize = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  `
