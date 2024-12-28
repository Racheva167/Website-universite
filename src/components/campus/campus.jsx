import React from 'react'
import './campus.css'
import gallery_1 from '../../assets/gallery1.jpg'
import gallery_2 from '../../assets/gallery2.jpg'
import gallery_3 from '../../assets/gallery.jpg'
import gallery_4 from '../../assets/gallery5.jpg'
import white_arrow from '../../assets/white_arrow.png'


const Campus = () => {
  return (
    <div className='campus' id='campus'>
        <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
        </div>
        <div>
            <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Campus