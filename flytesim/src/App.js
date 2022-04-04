import "./App.css";
import NavBar from "./NavBar";
import RubberCapstone from "./img/rubbercapstone.png";
import PencilCapstone from "./img/pencilcapstone.png";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2>Hello and welcome to...</h2>
      <h1>FLYTE SIMULATOR</h1>
      <Sprites>
        <img
          className="pencilcharacter"
          src={PencilCapstone}
          alt="Pencil Character"
        />
        <img
          className="rubbercharacter"
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
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  img{
    width: 500px;
    height: 500px;
    padding: 0px 10px 0px 10px;
  }
  `
