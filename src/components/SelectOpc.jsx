import "./css/SelectOpc.css";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";
import { useDispatch } from "react-redux";
import {
  addContactos,
  restoreState,
} from "../store/slices/productos/productosSlice";

export const SelectOpc = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(addContactos([localStorage.getItem("contacto")]));
  // }, []);

  const viewProducts = (datos, direccion) => {
    dispatch(restoreState());
    dispatch(addContactos(datos));
    navigate(direccion, { replace: "false" });
    localStorage.clear();
    localStorage.setItem("contacto", datos);
  };

  return (
    <div className="opc">
      <NavBar view={false} />

      {/* nuevo banner */}
      <div className="opc__image">
        <div className="opc__traspariencia">
          <div className="opc__banner">
            <h3 className="titulo1">EN UNA MISIÓN PARA HACER EL MUNDO</h3>
            <h2 className="titulo1">UN LUGAR MÁS SALUDABLE Y MÁS FELIZ</h2>
            <h2 className="titulo1">COMENZANDO CON USTED</h2>
          </div>
        </div>
      </div>

      <div className="opciones">
        <div
          onClick={() => viewProducts([], "/productos/Cliente")}
          className="opcion"
        >
          <button className="cliente">
            <img
              src="https://res.cloudinary.com/carlosdaniel/image/upload/v1677379796/neolife/y0y8ldqmxx7q4tuhood9.webp"
              alt="Publico"
            />
            {/* <h2 className="btncSelect">Catálogo Público</h2> */}
          </button>
        </div>
        <div
          onClick={() =>
            viewProducts(
              ["5567909661", "5546004927"],
              "/productos/Distribuidor"
            )
          }
          className="opcion"
        >
          <button className="distribuidor">
            <img
              src="https://res.cloudinary.com/carlosdaniel/image/upload/v1677379811/neolife/ndsv02yc2hgohchyj2pk.webp"
              alt="Distribuidores"
            />
            {/* <h2>Catálogo Distribuidores</h2> */}
          </button>
        </div>
      </div>
    </div>
  );
};
