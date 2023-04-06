import { useDispatch } from "react-redux";
import { addProductoModal } from "../store/slices/productos/productosSlice";
import { useState } from "react";

export const Producto = ({ producto, prev, next, count, all }) => {
  const [isactive, setIsactive] = useState(true);
  const dispatch = useDispatch();

  // funcion agregar Producto Modal
  const productoModal = (producto) => {
    dispatch(addProductoModal(producto));
  };

  const handlePrev = (e) => {
    prev();
  };

  const handleNext = () => {
    next();
  };

  return (
    <div>
      <div
        onClick={() => {
          if (isactive) {
            productoModal(producto);
          }
          return null;
        }}
        className="producto"
      >
        <div className="carousel-buttons">
          <button
            onClick={handlePrev}
            onMouseOver={() => setIsactive(false)}
            onMouseOut={() => setIsactive(true)}
          >
            <ion-icon
              style={{ color: "#7aac41", fontSize: "50px" }}
              name="chevron-back-outline"
            ></ion-icon>
          </button>
          <button
            onClick={handleNext}
            onMouseOver={() => setIsactive(false)}
            onMouseOut={() => setIsactive(true)}
          >
            <ion-icon
              name="chevron-forward-outline"
              style={{ color: "#7aac41", fontSize: "50px" }}
            ></ion-icon>
          </button>
        </div>
        <img
          className="producto__img"
          src={producto?.img}
          alt={producto?.nombre}
          loading="lazy"
        />
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
