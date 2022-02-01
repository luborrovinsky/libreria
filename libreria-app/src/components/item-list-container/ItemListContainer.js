import Item from "../item/Item";
import { useState } from "react";
import { products } from "../../data/products";
import { First } from "react-bootstrap/esm/PageItem";

const ItemListContainer = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  
  useEffect(() => {
    
}, [])}

const getProducts = async () => {
  try {
    const result = await productsAPI;
    console.log(result);
  } catch(error) {
    console.log({ error });
  } finally {
    console.log("Finalizacion del consumo de la API products");
  }
};

const ItemListContainer = () => {
    const [selectedItem, setSelectedItem] = useState(null);

  if (loading) {
    return <h1>Cargando...</h1>
  }

  return (
    <div>
        <h1>Lista de productos</h1>
        <h3>Producto Seleccionado</h3>
        <p>{selectedItem && selectedItem.name}</p>
        <p>{selectedItem && selectedItem.description}</p>
        <p>ID: {selectedItem && selectedItem.id} </p>
        <p>STOCK seleccionado: {selectedItem && selectedItem.stock}</p>
        <hr />
        {products.map((product) => (
          <Item key={product.id} {...product} setSelectedItem={setSelectedItem} />
        ))}
    </div>
  );
};

export default ItemListContainer;
