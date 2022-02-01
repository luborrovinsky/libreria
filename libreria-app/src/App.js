import logo from './logo.svg';
import './App.css';
import BarraNav from './components/navbar/NavBar';
import { ClassComponent } from "./components/class-component/ClassComponent";
import FunctionalComponent from "./components/function-component/FunctionalComponent";
import ItemListContainer from "./components/item-list-container/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import {task} from "./helpers/promises"
import { useEffect } from "react";

const age = 18;

function App() {
  const [showFunctionComponent, setShowFunctionComponent] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect (() => {
    getTaskResult();
  }, [])

  


  const getTaskResult = async() => {
    try {
      const result = await task;
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Promesa con async/await finalizada");
    }
  };

  task
    .then(
      (result) => {
        if (!result?.data?.array[0].user?.name) {
          throw new Error("Error de lógica de negocio");
        }
      console.log({ result });
    }, 
      (error) => {
       console.log({ error });
  }
)
.catch((error) => {
  setErrorMessage(error.message);
  console.log("error del catch", error);
});


  return (
    <div className="App">
      <BarraNav />
      <h1>Error: {errorMessage}</h1>
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


