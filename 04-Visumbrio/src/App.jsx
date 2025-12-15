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

    <Tarjetas/>

    <Justificacion/>

    <Desafios/>

    <Footer/>

    <Header/>

    <Productos/>

    <Footer/>

    
    </>
  )
}