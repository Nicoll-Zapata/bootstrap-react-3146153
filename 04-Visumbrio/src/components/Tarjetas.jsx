import "../stylesheets/Tarjetas.css"

export const Tarjetas = () => {
  return (
    <section className="objectives-section my-5">
        <h2 className='text-center title'>NUESTROS OBJETIVOS</h2>

        <div className="row">

            <div className="col-12 col-md-4 ">
                <div className="tarjeta p-5 ">
                    <img className="tarjeta-img py-3" src="./src/assets/ojo.png" alt="" />
                    <p className="info">Investigar y reflexionar sobre las acciones y dilemas éticos que enfrentan las personas cuando la población mundial alcanza niveles insostenibles, destacando las implicaciones a nivel social, económico y medioambiental.</p>
                </div>
            </div>

            
            <div className="col-12 col-md-4">
                <div className="tarjeta p-4">
                    <img className="tarjeta-img-2 py-5" src="./src/assets/explorar.png" alt="" />
                    <p className="info">Explorar la resiliencia humana y la capacidad de adaptación en tiempos de adversidad a través de testimonio de vida en casos reales.</p>
                </div>
            </div>

            
            <div className="col-12 col-md-4 ">
                <div className="tarjeta p-4">
                    <img className="tarjeta-img-3 py-5" src="./src/assets/ajustes.png" alt="" />
                    <p className="info">Consolidar una recolección de referentes visuales que muestran la transformación de la identidad en tiempos de crisis, con el fin de analizar la destrucción del entorno a causa de las crisis sociales.</p>
                </div>
            </div>




        </div>
    </section>
  )
}
