import { useSelector } from "react-redux";
import "./css/productoCarrito.css";
import { ProductoAgregado } from "./ProductoAgregado";

export const ProductoCarrito = () => {
  const { carrito } = useSelector((state) => state.productos);

  return (
    <>
      {carrito.map((item, index) => (
        <ProductoAgregado key={index} item={item} />
      ))}
    </>
  );
};
