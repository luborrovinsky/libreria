import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1>Inicio de e-comerce</h1>
        <div style={appStyles} />
      </header>
    </div>
  );
}

export default App;
