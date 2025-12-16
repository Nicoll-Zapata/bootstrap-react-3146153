import "../stylesheets/SeccionCard.css"

export const SeccionCard = () => {
  return (
  <div className="container mt-5">
      <div className="row g-4 align-items-stretch">

      
        <div className="col-12 col-md-3 d-flex flex-column justify-content-between">
          
      
          <div className="d-flex gap-4">
            <div className="card-box" style={{ backgroundColor: "#2f8fa3" }}>
              📖
              <p>About Us</p>
            </div>

            <div className="card-box" style={{ backgroundColor: "#5fae57" }}>
              👥
              <p>Our Team</p>
            </div>
          </div>

          <div className="card-box mt-4" style={{ backgroundColor: "#b45a6b" }}>
            ⬇️
            <p>Resume</p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div
            className="card-box big"
            style={{ backgroundColor: "#1f82d6" }}
          >
            🖼️
            <p>Our Works</p>
          </div>
        </div>

        <div className="col-12 col-md-3 d-flex flex-column">
          
          <div className="card-box" style={{ backgroundColor: "#8b6bd6" }}>
            🗺️
            <p>Contacts</p>
          </div>

          <div className="d-flex gap-4 mt-4">
            <div className="card-box" style={{ backgroundColor: "#b07a6a" }}>
              ✏️
              <p>Blog</p>
            </div>

            <div className="card-box" style={{ backgroundColor: "#c9a24d" }}>
              ✉️
              <p>Feedback</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}