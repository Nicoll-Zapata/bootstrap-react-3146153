import "../stylesheets/Productos.css"

export const Productos = () => {
  return (
    <div className="container flex-grow-1">

        <h3 className='text-center mb-5 tituli'>TIENDA</h3>
        <h5 className="text-center mb-5">NUESTROS PRODUCTOS</h5>

        <div className="row g-5 justify-content-center">
          <div className="col-6 col-md-4 col-lg-3 text-center">
            <img src="./src/assets/Pantalon.png" className="img-fluid mb-2 product-img" alt="Pantalón" />
            <p className="nombre">Pantalón Negro</p>
          </div>

          <div className="col-6 col-md-4 col-lg-3 text-center">
            <img src="./src/assets/billetera.png" className="img-fluid mb-2 product-img" alt="Billetera" />
            <p className="nombre">Billetera Visumbrio</p>
          </div>

          <div className="col-6 col-md-4 col-lg-3 text-center">
            <img src="./src/assets/medias.png" className="img-fluid mb-2 product-img" alt="Medias" />
            <p className="nombre">Medias Negras</p>
          </div>

          <div className="col-6 col-md-4 col-lg-3 text-center">
            <img src="./src/assets/gorro-blanco.png" className="img-fluid mb-2 product-img" alt="Gorro" />
            <p className="nombre">Gorro Blanco</p>
          </div>

          <div className="col-6 col-md-4 col-lg-3 text-center">
            <img src="./src/assets/botella.png" className="img-fluid mb-2 product-img" alt="Botella" />
            <p className="nombre">Botella Negra</p>
          </div>
        </div>
      </div>
  )
}
