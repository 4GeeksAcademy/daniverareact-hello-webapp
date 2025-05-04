import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 bg-light fixed-bottom">
	  <div className="container-fluid">
		<div className="row g-0"> {/* row sin separación entre columnas (g-0) */}
		  
		  {/* Botón "Volver a los contactos" (50% ancho) */}
		  <div className="col-6 pe-1"> {/* Mitad izquierda con padding derecho pequeño */}
			<Link to="/"
			  className="btn btn-secondary w-100 py-2" 
			  >
			  <i className="fa fa-arrow-left me-2"></i> Volver a los contactos
			</Link>
		  </div>
  
		  {/* Botón "Save" (50% ancho) */}
		 
  
		</div>
	  </div>
	</footer>
  );