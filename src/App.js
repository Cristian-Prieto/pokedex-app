import { Pokelist } from "./components/Pokelist";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Pokedex</h1>
      </header>
      <Pokelist />
      <footer className="footer">Cristian Prieto - Spain - 2022</footer>
    </div>
  );
}

export default App;
