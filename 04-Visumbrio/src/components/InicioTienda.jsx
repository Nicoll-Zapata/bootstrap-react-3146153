import React from 'react'

export const InicioTienda = () => {
  return (
     <div className="card shadow-sm p-4 product-container"> 
     <h3 className="text-center brand-title">Tienda</h3> 
     <p className="text-center section-title">Nuestros productos</p> 
     <div className="row mt-4"> 
        <div className="col-6 text-center"> 
            <img src="/assets/black-bag.png" className="prod-img" /> 
        </div> 
    <div className="col-6 text-center"> 
        <img src="/assets/cap-black.png" className="prod-img" /> 
    </div> 
        <div className="col-6 text-center mt-4"> 
            <img src="/assets/socks.png" className="prod-img" /> 
        </div> 
            <div className="col-6 text-center mt-4"> 
                <img src="/assets/cap-white.png" className="prod-img" /> 
            </div> 
            <div className="col-6 text-center mt-4"> 
                <img src="/assets/bottle.png" className="prod-img" /> 
            </div> 
        </div> 
        <div className="text-center mt-5 footer-links"> 
            <p>Ayuda ‧ Téminos ‧ Privacidad</p> 
            <p className="copyright">© 2025 Visunmen9. All rights reserved.</p> 
            </div> 
        </div> 
        );
     } 
