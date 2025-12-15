import "../stylesheets/Tarjetas.css"

export const Tarjetas = ({titulo, imagen1, imagen2, imagen3, texto1, texto2, texto3}) => {
    return (
        <section className="container text-center my-5">
            <h3 className="mb-4">{titulo}</h3>
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card-obj px-3 py-4 ">
                        <img className="tarjeta-img py-3" src={imagen1} alt="" />
                        <p>{texto1}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-obj px-3 py-4">
                        <img className="tarjeta-img py-5" src={imagen2} alt="" />
                        <p>{texto2}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-obj px-3 py-4">
                        <img className="tarjeta-img3 py-5" src={imagen3} alt="" />
                        <p>{texto3}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
