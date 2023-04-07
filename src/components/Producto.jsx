import { Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { addProductoModal } from "../store/slices/productos/productosSlice";

export const Producto = ({ producto, prev, next, count, all }) => {
  const dispatch = useDispatch();

  // funcion agregar Producto Modal
  const productoModal = (producto) => {
    dispatch(addProductoModal(producto));
  };

  const handlePrev = (event) => {
    prev();
    event.stopPropagation();
  };

  const handleNext = (event) => {
    next();
    event.stopPropagation();
  };

  const ImageProducto = lazy(() => import("./ImageProducto"));

  return (
    <div>
      <div onClick={() => productoModal(producto)} className="producto">
        <div className="carousel-buttons">
          <button onClick={handlePrev}>
            <ion-icon
              disabled
              style={{ color: "#7aac41", fontSize: "50px" }}
              name="chevron-back-outline"
            ></ion-icon>
          </button>
          <button onClick={handleNext}>
            <ion-icon
              name="chevron-forward-outline"
              style={{ color: "#7aac41", fontSize: "50px" }}
            ></ion-icon>
          </button>
        </div>
        <Suspense fallback={<div className="loading">Cargando....</div>}>
          <ImageProducto url={producto?.img} />
        </Suspense>
        <div className="producto__informacion">
          <h6 className="producto__nombre">{producto?.nombre}</h6>
          <div className="producto__descripcion">
            {producto?.nombre === "BG" ||
            producto?.nombre === "Bio-Tone NTS" ||
            producto?.nombre === "CoQ10" ||
            producto?.nombre === "Pro Vitality" ||
            producto?.nombre === "Tre en en" ||
            producto?.nombre === "Vitamin E plus" ||
            producto?.nombre === "Vita-Squares" ||
            producto?.nombre === "Aloe Vera Gel"
              ? producto?.descripcion.map((item, index) => (
                  <p key={index}>{item}</p>
                ))
              : producto?.descripcion
                  .split(".")
                  .map((des, index) => <p key={index}>{des}</p>)}
          </div>
          <h6 className="producto__precio">
            $ {producto?.precio.toLocaleString("es-MX")}.00 MX
          </h6>
        </div>
        <p>{` ${count + 1} / ${all.length} `}</p>
      </div>
    </div>
  );
};
