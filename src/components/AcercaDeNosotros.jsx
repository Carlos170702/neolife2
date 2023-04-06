import "./css/AcercaDeNosotros.css";
import { NavBar } from "./NavBar";

/* componentes nuevo */
export const AcercaDeNosotros = () => {
  return (
    <>
      <div className="nosotros">
        <NavBar view={false} />
        <div className="nosotros__imagen">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/neolife-c7fcb.appspot.com/o/jerry.png?alt=media&token=28fd239d-2c8c-470e-bf52-120b3541fcd5"
            alt="imagen del fundador"
          />
        </div>

        <div className="nosotros__info">
          <h1>NUESTRA HISTORIA</h1>

          <div className="nosotros__descripcion">
            <p>
              <b>
                COMPROMETIDOS CON HACER DEL MUNDO UN LUGAR MAS FELIZ Y MAS
                SALUDABLE.
              </b>
              <br></br>
              Cuando era un muchacho joven, Jerry Brassfield sufría de asma y
              alergias severas. Decidida a encontrar alivio para su hijo
              enfermo, la madre de Jerry comenzó a añadir productos
              nutricionales de calidad a su dieta diaria. Fue entonces cuando
              descubrió el impacto profundo que los suplementos de calidad
              podrían tener a la hora de ayudar a restaurar la buena salud.
              Debido a su pasión por ayudar a otros, Jerry comenzó a compartir
              su testimonio inspirador con aquellos que le rodeaban y se dio
              cuenta de que la mayoría de las personas necesitaban una solución
              ante la falta de una buena nutrición. Compartir los productos y
              trabajar con otros para definir y lograr objetivos financieros y
              de la salud se convirtió en un negocio operado desde el hogar
              económicamente provechoso. Su fe en los productos y su deseo de
              cambiar vidas es lo que allanó el camino a Jerry para convertir su
              pequeño negocio de mercadeo en redes en una compañía
              multimillonaria global.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
