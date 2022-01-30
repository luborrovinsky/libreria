import { useState } from "react";
import { useEffect } from "react";

const FunctionalComponent = ({ name, age }) => {
    const [stateName, setStateName] = useState("Juan");
    const [surname, setSurname] = useState("Perez");
    const [user, setUser] = useState({
        name: "Juan",
        surname: "Perez",
    });
    
    useEffect (() => {
        console.log("Hola soy un componente funcional");
        return () => {
            console.log("voy a ser eliminado");
        }
    }, [user]);


    if(!name) {
        return <h1>name no existe</h1>
    }


    const updateNameAndSurname = () => {
        setStateName("Leo");
        setUser({ ...user, name: "Leo" });
    };


    return (
        <div>
            <h1>FunctionalComponent</h1>
            <h2>stateName: {stateName}</h2>
            <h2>stateSurname: {surname}</h2>
            <h3>state con objeto</h3>
            {/*con objeto*/}
            <h2>stateName: {user.name}</h2>
            <h2>stateSurname: {user.surname}</h2>
            <button onClick={updateNameAndSurname}>
                Cambiar stateNameAndSurname
            </button>
            <h2>Nombre: {name}</h2>
            <h2>Edad: {age}</h2>
        </div>
    );
};

export default FunctionalComponent;
