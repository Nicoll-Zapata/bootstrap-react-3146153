import "../stylesheets/Footer.css"


export const Footer = () => {
  return (
      <footer className="text-center py-4 mt-5 footer-section">

      <div className="d-flex justify-content-center gap-4 mb-3">
        <i className="bi bi-instagram fs-4"></i>
        <i className="bi bi-twitter fs-4"></i>
        <i className="bi bi-facebook fs-4"></i>
      </div>

      <div className="d-flex justify-content-center gap-4 small">
        <a href="#">Ayuda</a>
        <a href="#">Términos</a>
        <a href="#">Privacidad</a>
      </div>

      <p className="mt-3 small">© 2024 VISUMBRIO. All rights reserved.</p>
    </footer>
  )
}
