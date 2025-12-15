import "../stylesheets/Justificacion.css"  

export const Justificacion = () => {
  return (
    <>
       <section className="container my-5">
      <div className="box p-5 rounded">
        <div className="row align-items-center">

          <div className="col-md-6 text-white text-center">
            <h4 className="fw-bold">Contextualización</h4>
            <p>
              En tiempos de crisis, la cultura, la identidad y la sociedad cambian, reflejando la adaptación de las comunidades. La cultura actúa como resistencia y expresión, mientras que la identidad se redefine según las dinámicas sociales y mediáticas.
              </p>
            <button className="leer btn-sm">Leer más</button>
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <img src="./src/assets/image1.png" className="img-fluid rounded" alt="" />
          </div>

        </div>
      </div>
    </section>

     <section className="container my-5">
      <div className="box p-5 rounded">
        <div className="row align-items-center">

          <div className="col-md-6 order-2 order-md-1 mt-4 mt-md-0">
            <img src="./src/assets/image2.png" className="img-fluid rounded" alt="" />
          </div>

          <div className="col-md-6 text-white text-center order-1 order-md-2">
            <h4 className="fw-bold">Justificación</h4>
            <p>
              Este proyecto surge ante la necesidad de analizar las decisiones humanas en situaciones extremas y cómo estas pueden verse influenciadas por la cultura, la identidad y la sociedad en tiempos de crisis.
            </p>
            <button className="leer btn-sm">Leer más</button>
          </div>

        </div>
      </div>
    </section>
          
        </>

    


  )
}
