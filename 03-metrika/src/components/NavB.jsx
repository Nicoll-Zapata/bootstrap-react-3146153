import "../stylesheets/NavB.css"
export const NavB = () => {
  return (
    <div className="Titulo mt-5" >

      <div className="d-flex justify-content-between " style={{ paddingLeft: "280px", paddingRight: "280px"}}> 

      <h2 className="fs-1 mb-0" >Metrika</h2>

      <div className="icons d-flex  gap-3 fs-3">
        <div className="bi bi-facebook"></div>
        <div className="bi bi-twitter"></div>
        <div className="bi bi-google"></div>
        <div className="bi bi-snapchat"></div>
        <div className="bi bi-whatsapp"></div>

      </div>

      </div>

    </div>
  )
}
