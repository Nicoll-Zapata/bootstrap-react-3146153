
import "../src/stylesheets/Header.css"
import { Desafios } from "./components/Desafios"
import { Footer } from "./components/Footer"
import { Inicio } from "./components/Inicio"
import { Justificacion } from "./components/Justificacion"
import { Tarjetas } from "./components/Tarjetas"

export const App = () => {
  return (

    <>
     <div className="header">

      <div className="text-center pt-2">
        <img 
          src="./src/assets/Logotipo (1).svg"   
          alt="Visumbrío Logo"
          className="logo-img"
        />
      </div>

      <nav className="nav justify-content-center mt-3 menu-principal">
        <a className="nav-link" href="#">Inicio</a>
        <a className="nav-link" href="#">Cómic</a>
        <a className="nav-link" href="#">Integrantes</a>
        <a className="nav-link" href="#">Tienda</a>
      </nav>

    </div>

    <Inicio/>

    <Tarjetas/>

    <Justificacion/>

    <Desafios/>

    <Footer/>
    
    </>
  )
}

