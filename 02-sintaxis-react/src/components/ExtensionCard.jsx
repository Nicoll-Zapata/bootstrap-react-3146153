import React from 'react'
import "../stylesheets/ExtensionCard.css"

export const ExtensionCard = ({cardTitle, cardImage, cardDescription}) => {
  return (
    <div className='general'>
      <div className='informacion'>
        <div className='icon'>
        <img className='icono' src="" alt="" />

        </div>
        <div className='texto'>
          <h1 className='titulo'>DevLes</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto dolorum quo explicabo </p>
        </div>
      </div>
      <div className='remove'>
        <button className='remove1'>Remove</button>
        <div className='boton'>⏺</div>
      </div>
    </div>
  )
}
