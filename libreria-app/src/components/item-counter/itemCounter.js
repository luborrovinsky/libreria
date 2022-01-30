import React, { useState } from "react";

const ItemCounter = ({ stock }) => {
    const [counter, setCounter] = useState(0);
    const [currentTimes, setCurrentTimes] = useState(0);
    const [CurrentDate, setCurrentDate] = useState("");

    const minusCounter = () => {
        if (counter <=0) return;
        setCounter(counter - 1);
    };

    const plusCounter = () => {
        if (counter >= stock) return;
        setCounter(counter + 1);
    };

    const takeMe = () => {
        setCurrentTimes(currentTimes +1);
        const today = new Date();
        setCurrentDate(
            `Hoy es ${today.getFullYear()}-${
                today.getMonth() + 1
            }-${today.getDate()}, y son las ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} horas`
        );
    };


    return (
        <>
            <div>
                <h3>Me han tocado {currentTimes} veces!</h3>
                <h3>{CurrentDate}</h3>
                <button on Click={minusCounter}>-</button>
                <span>{counter}</span>
                <button onClick={plusCounter}>+</button>
            </div>
            <button onClick={takeMe}>Touch me</button>
        </>
    );

};
export default ItemCounter;