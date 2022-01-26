import Item from "../item/Item";
import { useState } from "react";

const items = [
    { id: "1", name: "Rayuela", price: "800" },
    { id: "2", name: "Ficciones", price: "1000" },
    { id: "3", name: "Operación Masacre", price: "700" },
    { id: "4", name: "Un Mundo Feliz", price: "1200" },
];

const ItemListContainer = () => {
    const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
        <h1>Lista de productos</h1>
        <h3>Producto Seleccionado</h3>
        <p>{selectedItem ? selectedItem.name : "Ninguno"}</p>
        <hr />
        {items.map(({ id, name, price }) => (
            <Item 
            key={id}
            id= {id}
            name={name} 
            price={price} 
            setSelectedItem={setSelectedItem} 
            />
        ))}
    </div>
  );
};

export default ItemListContainer;
