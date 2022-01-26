import logo from './logo.svg';
import './App.css';
import BarraNav from './components/navbar/NavBar';
import { ClassComponent } from "./components/class-component/ClassComponent";
import FunctionalComponent from "./components/function-component/FunctionalComponent";
import ItemListContainer from "./components/item-list-container/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

const age = 18;


function App() {
  return (
    <div className="App">
      <BarraNav />
      <h1>Inicio de e-comerce</h1>
      <hr />
      <ClassComponent age={age} name="Luna" />
      <hr />
      <FunctionalComponent age={age} name="Santiago" />
      <hr/>
      <ItemListContainer />
    </div>
    
  );
}

export default App;


