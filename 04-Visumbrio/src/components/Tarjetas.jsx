import "../stylesheets/Tarjetas.css"

export const Tarjetas = () => {
    return (
        <section className="container text-center my-5">
            <h3 className="mb-4">NUESTROS OBJETIVOS</h3>
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card-obj px-3 py-4 ">
                        <img className="tarjeta-img py-3" src="./src/assets/ojo.png" alt="" />
                        <p>Investigar y reflexionar sobre las acciones y dilemas éticos que enfrentan las personascuando la población mundial alcanza niveles insostenibles, destacando las implicaciones a nivel social, económico y medioambiental.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-obj px-3 py-4">
                        <img className="tarjeta-img py-5" src="./src/assets/explorar.png" alt="" />
                        <p>Explorar la resiliencia humana y la capacidad de adaptación en tiempos de adversidad a través de testimonio de vida en casos reales.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-obj px-3 py-4">
                        <img className="tarjeta-img3 py-5" src="./src/assets/ajustes.png" alt="" />
                        <p>Consolidar una recolección de referentes visuales que muestran la transformación de laidentidad en tiempos de crisis, con el fin de analizar la destrucción del entorno a causa de las crisis sociales.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
