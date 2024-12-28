import React from 'react'
import './heru.css'
import dark_arrow from '../../assets/arrow16.png'

const Heru = () => {
  return (
    <div className='heru container' id='heru'>
    <div className='heru-text'>
        <h1>Votre confiance, notre expertise</h1>
        <p>Votre partenaire de confiance pour des chiffres clairs et une gestion sereine de vos finances.</p>
        <button className='btn'>Contactez nous <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
  };

export default Heru
