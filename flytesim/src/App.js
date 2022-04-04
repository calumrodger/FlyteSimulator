import "./App.css";
import NavBar from "./NavBar";
import RubberCharacter from "./img/RubberCharacter.png";
import PencilCharacter from "./img/PencilCharacter.png";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hello!</h1>
      <div className="sprites">
        <img
          className="pencilcharacter"
          src={PencilCharacter}
          alt="Pencil Character"
        />
        <img
          className="rubbercharacter"
          src={RubberCharacter}
          alt="Rubber Character"
        />
      </div>
    </div>
  );
}

export default App;
