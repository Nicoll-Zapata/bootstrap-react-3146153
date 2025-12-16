import { Desafios } from "./components/Desafios"
import { Footer } from "./components/Footer"
import { Inicio } from "./components/Inicio"
import { Justificacion } from "./components/Justificacion"
import { Tarjetas } from "./components/Tarjetas"
import { Productos } from "./components/Productos"
import { Header } from "./components/Header"

export const App = () => {
  return (
    <>
    <Header/>

    <Inicio/>

    <Tarjetas
         imagen1="./src/assets/ojo.png"
         texto1='Investigar y reflexionar sobre las acciones y dilemas éticos que enfrentan las personascuando la población mundial alcanza niveles insostenibles, destacando las implicaciones anivel social, económico y medioambiental.'
         imagen2="./src/assets/explorar.png"
         texto2='Explorar la resiliencia humana y la capacidad de adaptación en tiempos de adversidad a través de testimonio de vida en casos reales.'
         imagen3="./src/assets/ajustes.png"
         texto3="Consolidar una recolección de referentes visuales que muestran la transformación de laidentidad en tiempos de crisis, con el fin de analizar la destrucción del entorno a causa de las crisis sociales."
         titulo="NUESTROS OBJETIVOS"
    />


    <Justificacion/>

    <Desafios/>

    <Footer/>

    <Header/>

    <Productos/>

    <Footer/>

    
    </>
  )
}