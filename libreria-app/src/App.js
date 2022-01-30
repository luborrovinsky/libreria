import logo from './logo.svg';
import './App.css';
import BarraNav from './components/navbar/NavBar';
import { ClassComponent } from "./components/class-component/ClassComponent";
import FunctionalComponent from "./components/function-component/FunctionalComponent";
import ItemListContainer from "./components/item-list-container/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const age = 18;


function App() {
  const [showFunctionComponent, setShowFunctionComponent] = useState(true);

  return (
    <div className="App">
      <BarraNav />
      <h1>Inicio de e-commerce</h1>
      <hr />
      <ClassComponent age={age} name="Luna" />
      <hr />
      {showFunctionComponent && <FunctionalComponent age={age} name="Santiago" />}
      
      <button onClick={() => setShowFunctionComponent(!showFunctionComponent)}>Eliminar componente funcional</button>
      <hr/>
      <ItemListContainer />
    </div>
    
  );
}

export default App;


