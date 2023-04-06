import { useDispatch, useSelector } from "react-redux";
import "./css/modalProducto.css";
import { FiX } from "react-icons/fi";
import {
  addCarrito,
  addProductoModal,
  deleteCarrito,
} from "../store/slices/productos/productosSlice";
import { useEffect, useState } from "react";

export const ModalProducto = () => {
  const [tipoDeCantidad, setTipoDeCantidad] = useState("unidad");
  const [cantidad, setCantidad] = useState(0);
  const [sabor, setSabor] = useState(null);
  const { modalProducto, enlaces } = useSelector((state) => state.productos);
  const [sabores, Setsabores] = useState([]);
  const dispatch = useDispatch();

  // elegir cantidad
  const seleccionarCantidad = (e) => {
    setCantidad(e.target.value);
  };

  // añadir al carrito
  const añadirCarrito = () => {
    if (enlaces.length > 0 && modalProducto.nombre === "NeoLifeShake") {
      if (sabor === null || sabor === "sabores") {
        alert("Elige un sabor");
        return;
      }
    }

    if (cantidad <= 0) {
      dispatch(
        deleteCarrito({
          nombre: modalProducto.nombre,
          precio: modalProducto?.precio,
          cantidad: cantidad,
        })
      );
      dispatch(addProductoModal(null));
    }

    if (cantidad > 0) {
      tipoDeCantidad === "unidad"
        ? dispatch(
            addCarrito(
              modalProducto?.nombre !== "NeoLifeShake"
                ? {
                    nombre: modalProducto.nombre,
                    precio: modalProducto?.precio,
                    cantidad: cantidad,
                    puntos: modalProducto?.puntos,
                    tipo: tipoDeCantidad,
                  }
                : {
                    nombre: sabor,
                    precio: modalProducto?.precio,
                    cantidad: cantidad,
                    puntos: modalProducto?.puntos,
                    tipo: tipoDeCantidad,
                  }
            )
          )
        : dispatch(
            addCarrito(
              modalProducto?.nombre !== "NeoLifeShake"
                ? {
                    nombre: modalProducto.nombre,
                    precio: modalProducto?.caja?.precio,
                    cantidad: cantidad,
                    puntos: modalProducto?.caja?.puntos,
                    tipo: tipoDeCantidad,
                  }
                : {
                    nombre: sabor,
                    precio: modalProducto?.caja?.precio,
                    cantidad: cantidad,
                    puntos: modalProducto?.caja?.puntos,
                    tipo: tipoDeCantidad,
                  }
            )
          );
      dispatch(addProductoModal(null));
    }
  };

  // cambiar tipo de cantidad
  const updateCantidad = ({ target }) => {
    setTipoDeCantidad(target.value);
  };

  useEffect(() => {
    if (tipoDeCantidad === "unidad") {
      const res = modalProducto?.sabores?.filter(
        (item) => item !== "NeoLifeShake Mix"
      );
      Setsabores(res);
      return;
    }

    Setsabores(modalProducto?.sabores);
  }, [tipoDeCantidad]);

  return (
    <div className="modalProducto">
      <div className="modalProducto__view animate__animated animate__fadeInDown">
        <div className="modalProducto__imagen">
          <FiX
            className="modalProducto__FiX"
            onClick={() => dispatch(addProductoModal(null))}
          />
          <img src={modalProducto?.img} alt={modalProducto?.nombre} />
        </div>
        <div className="modalProducto__informacion">
          <h3>{modalProducto?.nombre}</h3>
          <p>{modalProducto?.descripcion}</p>
        </div>

        {enlaces.length > 0 && (
          <div className="modalProducto__tipoDeCompra">
            <div className="modalProducto__Tipo">
              <input
                type="radio"
                name="tipo de compra"
                value="unidad"
                onClick={updateCantidad}
                defaultChecked
              />
              <label>Comprar por unidad/es</label>{" "}
            </div>
            <div className="modalProducto__Tipo">
              <input
                type="radio"
                name="tipo de compra"
                value="caja"
                onClick={updateCantidad}
              />
              <label>Comprar por caja/s (6 unidades)</label>
            </div>
          </div>
        )}

        <div className="modalProducto__seleccionarCantidad">
          <label htmlFor="cantidad">Cantidad</label>
          <select onChange={seleccionarCantidad}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>

          {modalProducto?.nombre === "NeoLifeShake" && (
            <select onClick={({ target }) => setSabor(target.value)}>
              <option value="sabores" selected disabled>
                Sabores
              </option>
              {sabores?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* mostrar boton depende a tipo de cantidad */}
        {tipoDeCantidad !== "unidad" ? (
          <button className="btn btn--verde" onClick={() => añadirCarrito()}>
            Agregar {cantidad} Cajas ${" "}
            {(cantidad * modalProducto?.caja?.precio).toLocaleString("es-MX")}
            .00 MX
          </button>
        ) : (
          <button className="btn btn--verde" onClick={() => añadirCarrito()}>
            Agregar {cantidad} unidad ${" "}
            {(cantidad * modalProducto.precio).toLocaleString("es-MX")}.00 MX
          </button>
        )}

        {enlaces.length > 0 && (
          <p className="modalProducto__puntos">
            {`Acumulas ${
              cantidad *
              (tipoDeCantidad !== "unidad"
                ? modalProducto?.caja?.puntos
                : modalProducto?.puntos)
            } puntos`}
          </p>
        )}
      </div>
    </div>
  );
};
